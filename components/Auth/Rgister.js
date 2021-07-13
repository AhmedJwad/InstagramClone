import React , {useState} from 'react'
import { View, TextInput, Button} from 'react-native'
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
  
const Rgister = () => {
  const [formData, setFormdata] = useState(defaultFormValues())
  
  const SignUp=()=>{
    firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
      .then((result)=>{
          console.log(result)
      }).catch((error)=>{
        console.log(error)
      })
  }
  const OnChange=(e , type)=>{
  setFormdata({...formData , [type]:e.nativeEvent.text})
  }
    return (
        <View>
            <TextInput
              placeholder="please insert your name"  
              onChange={(e)=> OnChange(e, "name")} 
              defaultValue={formData.name}
            />
             <TextInput
              placeholder="please insert your email"  
              onChange={(e)=> OnChange(e, "email")} 
              defaultValue={formData.email}
            />
             <TextInput
              placeholder="please insert your pasword"  
              secureTextEntry={true}
              onChange={(e)=> OnChange(e, "password")} 
              defaultValue={formData.password}
            />
      <Button
       title="Sign Up"
       onPress={SignUp()}
      />
        </View>
    )
}
const defaultFormValues=()=>{
    return {name:"", email:"" , password:""}
}
export default Rgister

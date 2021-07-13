import React , {useState} from 'react'
import { View, Text , TextInput, Button } from 'react-native'
import firebase from 'firebase/App'

const Login = () => {
   const [formData, setFormdata] = useState(defaultFormValues())
   const onchange=(e, type)=>{
       setFormdata({...formData , [type]:e.nativeEvent.text})
   }
   const Dologin=()=>{
      firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
      .then((result)=>{
          console.log(result)
      }).catch((error)=>{
          console.log(error)
      })
   }
    return (
        <View>
            <TextInput
             placeholder="enter your email"
             keyboardType='email-address'
             onChange={(e)=>onchange(e, "email")}
             defaultValue={formData.email}
            />
            <TextInput
             placeholder="enter your pasword"
            secureTextEntry={true}
             onChange={(e)=>onchange(e, "password")}
             defaultValue={formData.password}
            />
            <Button
            title="Login"
            onPress={Dologin()}
            />
        </View>
    )
}

const defaultFormValues=()=>{
    return{email:"" , password:""}
}
export default Login

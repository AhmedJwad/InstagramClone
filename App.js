import React ,{ useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/Auth/Landing';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import Rgister from './components/Auth/Rgister';
import { View , Text} from 'react-native';
const firebaseConfig = {
  apiKey: "AIzaSyBFVjlXP6WXcvlILMCKYgLLCGi4k1ASdQQ",
  authDomain: "instgramclone-755f4.firebaseapp.com",
  projectId: "instgramclone-755f4",
  storageBucket: "instgramclone-755f4.appspot.com",
  messagingSenderId: "566911154926",
  appId: "1:566911154926:web:5b037297d0f9d46d2351ff",
  measurementId: "G-KEN3ENC0BP"
};
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
const [User, setUser] = useState(null)
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

useEffect(() => {
 firebase.auth().onAuthStateChanged((Userinfo)=>{
   Userinfo? setUser(true):setUser(false)
 })
}, [])
  const stack=createStackNavigator();
 if(User)
  {
    return (        
      <View>
        <Text>you are login </Text>
      </View>
    );    
  }
 
  return (        
    <NavigationContainer>
    <stack.Navigator initialRouteName="Landing">
      <stack.Screen
       name='landing'
      component={Landing}
       options={{headerShown:false}}
      />     
        <stack.Screen
       name='register'
      component={Rgister}
       options={{headerShown:false}}
      />     
    </stack.Navigator>
    </NavigationContainer>
  ); 
}



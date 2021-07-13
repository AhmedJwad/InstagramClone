import React from 'react'
import { View, Text , Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Landing = () => {
    const Navigation=useNavigation();    
    return (
        <View style={{flex:1 , justifyContent:"center"}}>
           <Button style={{marginBottom:10,}}
           title="Register"
           onPress={()=>Navigation.navigate('register')}/>
            <Button 
           title="Login"
           onPress={()=>Navigation.navigate('login')}/>
        </View>
    )
}

export default Landing

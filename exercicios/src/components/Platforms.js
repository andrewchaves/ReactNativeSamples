import React from 'react'
import {Button, ALert, ToastAndroid, Platform} from 'react-native'

export default (props) => {
    const notify = msg => {
        if(Platform.OS === 'android'){
            ToastAndroid.show(msg,ToastAndroid.LONG)
        }else{
            ALert.alert('Informação', msg)
        }
    }

    return (
        <Button title='Plataforma?'  
                onPress={() => notify('parabéns')}/>
    )
}
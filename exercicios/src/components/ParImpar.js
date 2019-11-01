import React from 'react'
import {View, Text} from 'react-native'
import Pattern from '../styles/Pattern'

function parOuImpar(num) {
    return num % 2 == 0
            ? <Text style={Pattern.ex}>Par</Text>
            : <Text style={Pattern.ex}>Ímpar</Text>
}

export default (props)=> {
    return (
        <View>
            {parOuImpar(props.number)}
        </View>
    )
}

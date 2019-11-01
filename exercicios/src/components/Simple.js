import React from 'react'
import {Text} from 'react-native'
import Pattern from '../styles/Pattern'


export default (props) => {
    return <Text style={[Pattern.ex]}>Arrow:{props.text}</Text>
}
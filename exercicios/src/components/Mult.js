import React from 'react'
import {Text} from 'react-native'

import Pattern from '../styles/Pattern'

export const Invert = (props) => {
    const inv = props.text.split('').reverse().join('')
    return <Text style={Pattern.ex}>{inv}</Text>
}

export const MegaSena = (props) => {
    const [min,max] = [1,60]
    const numbers = Array(props.numeros || 6).fill(0)

    for (let i=0; i < numbers.length; i++){
        let neo = 0
        while (numbers.includes(neo)) {
            neo = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numbers[i] = neo
    }
    numbers.sort((a,b) => a - b)
    return <Text style={Pattern.ex}>{numbers.join(', ')}</Text>
}
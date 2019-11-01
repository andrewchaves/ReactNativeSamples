import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Pattern from '../styles/Pattern'

export const Enter = props => {
    return (
        <View>
            <TextInput value={props.text}
                       style={Pattern.input}
                       onChangeText={props.callWhenChange}/>

        </View>
    )
}

export default class SynchronizedText extends Component {
    state = {
        text: ''
    }

    setText = text => {
        this.setState({text})
    }

    render() {
        return(
            <View>
                <Text style={Pattern.font40}>
                    {this.state.text}
                </Text>
                <Enter text={this.state.text} callWhenChange={this.setText}></Enter>
            </View>
        )
    }
}
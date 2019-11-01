import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'

import Pattern from '../styles/Pattern'

export default class Event extends Component {
    state = {
        text: ""
    }

    setText = text => {
        this.setState({text})
    }

    render() {
        return (
            <View>
                <Text style={Pattern.font40}>
                    {this.state.text}
                </Text>
                <TextInput value={this.state.text}
                            style={Pattern.input} onChangeText={this.setText}/>
            </View>
        )
    }
}
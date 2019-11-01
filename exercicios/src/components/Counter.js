import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'


export default class Counter extends Component {

    state = {
        number: 0
    }

    oneMore = () => {
        this.setState({number: this.state.number + 1})
    }

    clear = () => {
        this.setState({number: 0})
    }

    render() {
        return (
            <View>
                <Text style={{fontSize:40}}>
                    {this.state.number}
                </Text>
                <TouchableHighlight onPress={this.oneMore} onLongPress={this.clear}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
                
            </View>
        )
    }
}
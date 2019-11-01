import React from 'react'
import { View, StyleSheet} from 'react-native'

import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import {Invert, MegaSena} from './components/Mult'

export default class App extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Simple text='Flexível!!!'/>
            <ParImpar number={2}/>
            <Invert text={'react native!'}/>
            <MegaSena/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    }
})
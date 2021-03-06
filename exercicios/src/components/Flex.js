import React from 'react'
import {View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    north: {
        flex:1,
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        flex:2,
        flexDirection: 'row',
        backgroundColor: '#f2f9bd',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    south:{
        flex :1,
        backgroundColor: '#bdf9c4',
        alignItems: 'center',
        justifyContent: 'center'

    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: '#f47f61',
        borderRadius: 50
    }
})

const Circulo = props => {
    return (
        <View style={styles.circle}>

        </View>
    )
}

export default (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.north}>
                <Circulo/>
            </View>
            <View style={styles.center}>
                <Circulo/>
                <Circulo/>
                <Circulo/>
            </View>
            <View style={styles.south}>
                <Circulo/>
            </View>
        </View>
    )
}
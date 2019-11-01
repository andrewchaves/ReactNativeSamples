import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const students = [
    {id: 1, name: 'joão',score: 7.0},
    {id: 2, name: 'Ana',score: 7.0},
    {id: 3, name: 'Bia',score: 8.0},
    {id: 4, name: 'Claudia',score: 6.0},
    {id: 5, name: 'Roberto',score: 7.0},
    {id: 6, name: 'Rafael',score: 5.0},
    {id: 7, name: 'Guilherme',score: 8.0},
    {id: 8, name: 'Rebeca',score: 9.0},
    {id: 9, name: 'Tobias',score: 7.0},
    {id: 10, name: 'Clara',score: 7.0},
    {id: 11, name: 'ALberto',score: 7.0},
    {id: 12, name: 'Renato',score: 8.0},
    {id: 13, name: 'Julia',score: 6.0},
    {id: 14, name: 'Marcelo',score: 7.0},
    {id: 15, name: 'Miguel',score: 5.0},
    {id: 16, name: 'Fernando',score: 8.0},
    {id: 17, name: 'Paula',score: 9.0},
    {id: 18, name: 'Cleber',score: 7.0}
]

const itemStyle = {
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderCOlor: '#222',
    
    //Flex
    alignItems: 'flex-start', 
    flexDIrection: 'row',
    justifyContent: 'flex-start'
}

export const Student = props => {
    return (
        <View style={itemStyle}>
            <Text>
                Nome: {props.name}
            </Text>
            <Text style={{fontWeight: 'bold'}}>
                Nota: {props.score}
            </Text>
        </View>
    )
}

export default (props) => {
    const renderItem = ({item}) => {
        return <Student {...item}/>
    }

    return (
        // <ScrollView>
            <FlatList data={students} renderItem={renderItem}
                      keyExtractor={(_, index) => index.toString()} />
        // </ScrollView>
    )
}
import React from 'react'
import {View, Text} from 'react-native'

const font = { style: {fontSize: 30}}

export const Son = props => {
   return ( <View>
        <Text {...font}> 
            Filho: {props.name} {props.lastname}
        </Text>
    </View>
   )
}

export const Father = props => {
   return( 
        <View>
            <Text {...font}>
               Pai: {props.name} {props.lastname}
            </Text>
            {React.Children.map(props.children, 
                c => React.cloneElement(c, { ...props, ...c.props }))}
        </View>
   )
}

export const Grand = props => {
    return (
        <View>
            <Text {...font}>
                GrandFather: {props.name} {props.lastname}
            </Text>
            <Father name='André' lastname={props.lastname}>
                <Son name='Ana'/>
                <Son name='Gui'/>
                <Son name='Davi'/>
            </Father>
            <Father {...props} name='Pedro'>
                <Son name='Rebeca'/>
                <Son name='Renato'/>
            </Father>
        </View>
    )
}

export default Grand
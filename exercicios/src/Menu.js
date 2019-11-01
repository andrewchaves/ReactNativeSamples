import React from 'react'
import {View, TouchableOpacity, Image} from 'react-native'
import {createDrawerNavigator} from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import {Invert, MegaSena} from './components/Mult'
import Counter from './components/Counter'
import Platform from './components/Platforms'
import ValidateProps from './components/ValidateProps'
import Event from './components/Event'
import Grand from './components/DirectCom'
import SynchronizedText from './components/IndirectCom'
import StudentList from './components/ListFlex'
import Flex from './components/Flex'

class NavigationDrawerStructure extends React.Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <Image
              source={require('./images/drawer.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      );
    }
  }

const MegaSenaScreen = createStackNavigator({
    First: {
      screen: () => <MegaSena/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Mega Sena',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })

  const InvertScreen = createStackNavigator({
    First: {
      screen: () => <Invert text={'React native!!!'}/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Inverter',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })

  const ParImparScreen = createStackNavigator({
    First: {
      screen: () => <ParImpar number={3}/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Par ou ímpar',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })

  const SimpleScreen = createStackNavigator({
    First: {
      screen: () => <Simple text={'Hello World!!!'}/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Simples',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })

  const CounterScreen = createStackNavigator({
    First: {
      screen: () => <Counter/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Contador',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })

  const PlatformScreen = createStackNavigator({
    First: {
      screen: () => <Platform/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Plataform',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })

  const ValidatePropsScreen = createStackNavigator({
    First: {
      screen: () => <ValidateProps label = {'Year: '} year={2019}/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Validar Propriedades',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })

  const EventScreen = createStackNavigator({
    First: {
      screen: () => <Event/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Evento',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })

  const GrandScreen = createStackNavigator({
    First: {
      screen: () => <Grand name='joão' lastname='Silva'/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Avô',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })

  const SynchronizedTextScreen = createStackNavigator({
    First: {
      screen: () => <SynchronizedText/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Texto Sincronizado',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })

  const StudentListScreen = createStackNavigator({
    First: {
      screen: () => <StudentList/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Lista de Estudantes',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })

  const FlexScreen = createStackNavigator({
    First: {
      screen: () => <Flex/>,
      navigationOptions: ({ navigation }) => ({
        title: 'Flex',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  })


const DrawerNavigator = createDrawerNavigator({
    Counter: {
        screen: CounterScreen,
        navigationOptions: {drawerLabel: 'Contador'}
    },
    MegaSena: {
        screen: MegaSenaScreen,
        navigationOptions: {drawerLabel: 'Mega Sena'}
    },
    Invert: {
        screen: InvertScreen,
        navigationOptions: {drawerLabel: 'Inverter'}
    },
    ParImpar: {
        screen: ParImparScreen,
        navigationOptions: {drawerLabel: 'Par ou ímpar'}
    },
    Simple: {
        screen: SimpleScreen,
        navigationOptions: {drawerLabel: 'Simples'}
    },
    Platform: {
      screen: PlatformScreen,
      navigationOptions: {drawerLabel: 'Plataforma'}
    },
    ValidateProps: {
      screen: ValidatePropsScreen,
      navigationOptions: {drawerLabel: 'Validar Propriedades'}
    },
    Event: {
      screen: EventScreen,
      navigationOptions: {drawerLabel: 'Evento'}
    },
    Grand: {
      screen: GrandScreen,
      navigationOptions: {drawerLabel: 'Avô'}
    },
    SynchronizedText: {
      screen: SynchronizedTextScreen,
      navigationOptions: {drawerLabel: 'Texto sincronizado'}
    },
    StudentList: {
      screen: StudentListScreen,
      navigationOptions: {drawerLabel: 'Lista de alunos'}
    },
    Flex: {
      screen: FlexScreen,
      navigationOptions: {drawerLabel: 'Flex'}
    }
},{drawerWidth:300})

export default createAppContainer(DrawerNavigator)
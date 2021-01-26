import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Background } from '../../styles/global';
import { TabsTop, TabItem } from './styles'

function Tables({ navigation }) {
  return (
    <Background>
      <TabsTop>
        <TouchableOpacity onPress={() => navigation.navigate('Tables')}>
          <TabItem selected={true}>Mesas</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Kitchen')}>
          <TabItem>Cozinha</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Waiters')}>
          <TabItem>Favores</TabItem>
        </TouchableOpacity>
      </TabsTop>
    </Background>
  );
}

function Kitchen({ navigation }) {
  return (
    <Background>
      <TabsTop>
        <TouchableOpacity onPress={() => navigation.navigate('Tables')}>
          <TabItem >Mesas</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Kitchen')}>
          <TabItem selected={true}>Cozinha</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Waiters')}>
          <TabItem>Favores</TabItem>
        </TouchableOpacity>
      </TabsTop>
    </Background>
  );
}

function Waiters({ navigation }) {
  return (
    <Background>
      <TabsTop>
        <TouchableOpacity onPress={() => navigation.navigate('Tables')}>
          <TabItem>Mesas</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Kitchen')}>
          <TabItem>Cozinha</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Waiters')}>
          <TabItem selected={true}>Favores</TabItem>
        </TouchableOpacity>
      </TabsTop>
    </Background>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator screenOptions={{tabBarVisible: false}}>
        <Tab.Screen name="Tables" component={Tables} />
        <Tab.Screen name="Kitchen" component={Kitchen} />
        <Tab.Screen name="Waiters" component={Waiters} />
      </Tab.Navigator>
  );
}
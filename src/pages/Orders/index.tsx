import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { 
  TabsTop, TabItem, OrderCard, OrderTitle, 
  OrderText, OrderButton, OrderTag, OrderBackground } from './styles'

function Tables({ navigation }) {
  return (
    <OrderBackground>
      <TabsTop>
        <TouchableOpacity onPress={() => navigation.navigate('Tables')}>
          <TabItem selected={true}>Mesas</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Kitchen')}>
          <TabItem>Cozinha</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Waiters')}>
          <TabItem>Favores</TabItem>
          <OrderTag>1</OrderTag>
        </TouchableOpacity>
      </TabsTop>
    </OrderBackground>
  );
}

function Kitchen({ navigation }) {
  return (
    <OrderBackground>
      <TabsTop>
        <TouchableOpacity onPress={() => navigation.navigate('Tables')}>
          <TabItem >Mesas</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Kitchen')}>
          <TabItem selected={true}>Cozinha</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Waiters')}>
          <TabItem>Favores</TabItem>
          <OrderTag>1</OrderTag>
        </TouchableOpacity>
      </TabsTop>
    </OrderBackground>
  );
}

function Waiters({ navigation }) {
  return (
    <OrderBackground>
      <TabsTop>
        <TouchableOpacity onPress={() => navigation.navigate('Tables')}>
          <TabItem>Mesas</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Kitchen')}>
          <TabItem>Cozinha</TabItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Waiters')}>
          <TabItem selected={true}>Favores</TabItem>
          <OrderTag>1</OrderTag>
        </TouchableOpacity>
      </TabsTop>
      <OrderCard>
        <OrderTitle>Mesa 1</OrderTitle>
        <Text>00:10</Text>
        <OrderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius massa elementum.Iscing elit. Pellentesque varius massa elementum.</OrderText>
          <OrderButton>A Caminho</OrderButton>
      </OrderCard>
    </OrderBackground>
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
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { 
  TabsTop, TabItem, OrderCard, OrderTitle, MenuScroll,
  OrderText, OrderButton, OrderTag, OrderBackground,
  OrderContainer, Back, OrderItem, OrderItemContent,
  OrderItemButton } from './styles'

import ArrowLeft from '../../assets/arrow-left.svg'
import { ListItem } from '../../styles/global'


function Tables({ navigation }) {
  const [cardActive, setCardActive] = useState(false)
  return (
    <>
      <OrderBackground>
        <MenuScroll 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>
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
        </MenuScroll>
        <OrderContainer>
          <OrderCard>
            <OrderTitle>Mesa 1</OrderTitle>
            <OrderItem>
              <Text>1 Picanha</Text>
              <OrderItemContent></OrderItemContent>
              <OrderItemButton>E</OrderItemButton>
            </OrderItem>
            <OrderItem onPress={() => setCardActive(!cardActive)}>
              <Text>1 Picanha</Text>
              <OrderItemContent active={cardActive}>
                <ListItem>+ Item</ListItem>
                <ListItem>+ Item</ListItem>
                <ListItem>+ Item</ListItem>
                <ListItem>+ Item</ListItem>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius massa elementum.</Text>
              </OrderItemContent>
              <OrderItemButton>E</OrderItemButton>
            </OrderItem>
            <OrderButton>Entregue</OrderButton>
          </OrderCard>
        </OrderContainer>
      </OrderBackground>
      <Back onPress={() => navigation.navigate('MainMenu')}><ArrowLeft /></Back>
    </>
  )
}

function Kitchen({ navigation }) {
  return (
    <>
      <OrderBackground>
        <MenuScroll 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>
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
        </MenuScroll>
        <OrderContainer>
          <OrderCard>
            <OrderTitle>Mesa 1</OrderTitle>
            <Text>00:10</Text>
            <OrderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius massa elementum.Iscing elit. Pellentesque varius massa elementum.</OrderText>
              <OrderButton>A Caminho</OrderButton>
          </OrderCard>
          <OrderCard>
            <OrderTitle>Mesa 1</OrderTitle>
            <Text>00:10</Text>
            <OrderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius massa elementum.Iscing elit. Pellentesque varius massa elementum.</OrderText>
              <OrderButton>A Caminho</OrderButton>
          </OrderCard>
          <OrderCard>
            <OrderTitle>Mesa 1</OrderTitle>
            <Text>00:10</Text>
            <OrderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius massa elementum.Iscing elit. Pellentesque varius massa elementum.</OrderText>
              <OrderButton>A Caminho</OrderButton>
          </OrderCard>
          <OrderCard>
            <OrderTitle>Mesa 1</OrderTitle>
            <Text>00:10</Text>
            <OrderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius massa elementum.Iscing elit. Pellentesque varius massa elementum.</OrderText>
              <OrderButton>A Caminho</OrderButton>
          </OrderCard>
        </OrderContainer>
      </OrderBackground>
      <Back onPress={() => navigation.navigate('MainMenu')}><ArrowLeft /></Back>
    </>
  )
}

function Waiters({ navigation }) {
  return (
    <>
      <OrderBackground>
        <MenuScroll 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>
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
        </MenuScroll>
        <OrderContainer>
          <OrderCard>
            <OrderTitle>Mesa 1</OrderTitle>
            <Text>00:10</Text>
            <OrderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius massa elementum.Iscing elit. Pellentesque varius massa elementum.</OrderText>
              <OrderButton>A Caminho</OrderButton>
          </OrderCard>
          <OrderCard>
            <OrderTitle>Mesa 1</OrderTitle>
            <Text>00:10</Text>
            <OrderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius massa elementum.Iscing elit. Pellentesque varius massa elementum.</OrderText>
              <OrderButton>A Caminho</OrderButton>
          </OrderCard>
          <OrderCard>
            <OrderTitle>Mesa 1</OrderTitle>
            <Text>00:10</Text>
            <OrderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius massa elementum.Iscing elit. Pellentesque varius massa elementum.</OrderText>
              <OrderButton>A Caminho</OrderButton>
          </OrderCard>
          <OrderCard>
            <OrderTitle>Mesa 1</OrderTitle>
            <Text>00:10</Text>
            <OrderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius massa elementum.Iscing elit. Pellentesque varius massa elementum.</OrderText>
              <OrderButton>A Caminho</OrderButton>
          </OrderCard>
        </OrderContainer>
      </OrderBackground>
      <Back onPress={() => navigation.navigate('MainMenu')}><ArrowLeft /></Back>
    </>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
      <Tab.Navigator screenOptions={{tabBarVisible: false}}>
        <Tab.Screen name="Tables" component={Tables} />
        <Tab.Screen name="Kitchen" component={Kitchen} />
        <Tab.Screen name="Waiters" component={Waiters} />
      </Tab.Navigator>
  )
}
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import { PageTitle } from '../../styles/global';
import { Background, MenuHeader, CategoryItem, SwipeMenu, Search } from './styles'

export default function App() {
  return (
    <Background>
      <MenuHeader>
        <PageTitle>Mesa 12</PageTitle>
        <Search placeholder="Pesquisar pratos" />
          <SwipeMenu 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}>
            <CategoryItem>
              <Text>Oi</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Oi</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Oi</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Oi</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Oi</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Oi</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Oi</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Oi</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Oi</Text>
            </CategoryItem>
          </SwipeMenu>
      </MenuHeader>
      <StatusBar style="auto" />
    </Background>
  );
}


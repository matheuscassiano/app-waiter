import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { PageTitle } from '../../styles/global';
import { 
  Background, MenuHeader, CategoryItem, 
  SwipeMenu, Search, SubTitle, LargeImage } from './styles'

import FoodeOne from '../../assets/food01.png'

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
              <Text>Categoria</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Categoria</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Categoria</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Categoria</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Categoria</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Categoria</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Categoria</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Categoria</Text>
            </CategoryItem>
            <CategoryItem>
              <Text>Categoria</Text>
            </CategoryItem>
          </SwipeMenu>
      </MenuHeader>
      <ScrollView>
        <SubTitle>Promoções</SubTitle>
        <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>
          <LargeImage source={FoodeOne} />
          <LargeImage source={FoodeOne} />
          <LargeImage source={FoodeOne} />
          <LargeImage source={FoodeOne} />
          <LargeImage source={FoodeOne} />
          <LargeImage source={FoodeOne} />
        </ScrollView>
        <SubTitle>Cervejas</SubTitle>
      </ScrollView>
      <StatusBar style="auto" />
    </Background>
  );
}


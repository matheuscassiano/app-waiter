import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { PageTitle } from '../../styles/global';
import { 
  Background, MenuHeader, CategoryItem, 
  SwipeMenu, Search, SubTitle, LargeImage,
  SwipeProm } from './styles'

import FoodeOne from '../../assets/food01.png'
import FoodeTwo from '../../assets/food02.png'
import { ListItem } from '../../components/ItemList/styles';

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
        <SwipeProm
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>
          <View>
            <LargeImage source={FoodeOne} />
            <Text>Picanha na Chapa com Fritas</Text>
            <Text>R$ 50.00</Text>
          </View>
          <View>
            <LargeImage source={FoodeOne} />
            <Text>Picanha na Chapa com Fritas</Text>
            <Text>R$ 50.00</Text>
          </View>
          <View>
            <LargeImage source={FoodeOne} />
            <Text>Picanha na Chapa com Fritas</Text>
            <Text>R$ 50.00</Text>
          </View>
          <View>
            <LargeImage source={FoodeOne} />
            <Text>Picanha na Chapa com Fritas</Text>
            <Text>R$ 50.00</Text>
          </View>
          <View>
            <LargeImage source={FoodeOne} />
            <Text>Picanha na Chapa com Fritas</Text>
            <Text>R$ 50.00</Text>
          </View>
        </SwipeProm>
        <SubTitle>Cervejas</SubTitle>
        <View>
          <ListItem>
            <Text>Nome</Text>
            <Text>Nome</Text>
          </ListItem>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </Background>
  );
}


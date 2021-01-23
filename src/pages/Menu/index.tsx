import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { PageTitle, Price, LineBreak, MinPrice, MinSubPrice } from '../../styles/global';
import { 
  Background, MenuHeader, CategoryItem, 
  SwipeMenu, Search, SubTitle, LargeImage,
  SwipeProm } from './styles'

import FoodeOne from '../../assets/food01.png'
import FoodeTwo from '../../assets/food02.png'
import Beer from '../../assets/beer.png'
import { ItemCard, Content, RoundedImage, ItemTitle } from '../../components/ItemList';

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
            <Text><MinPrice>R$ 50.00</MinPrice> <MinSubPrice>R$ 66.00</MinSubPrice></Text>
          </View>
          <View>
            <LargeImage source={FoodeOne} />
            <Text>Picanha na Chapa com Fritas</Text>
            <Text><MinPrice>R$ 50.00</MinPrice> <MinSubPrice>R$ 66.00</MinSubPrice></Text>
          </View>
          <View>
            <LargeImage source={FoodeOne} />
            <Text>Picanha na Chapa com Fritas</Text>
            <Text><MinPrice>R$ 50.00</MinPrice> <MinSubPrice>R$ 66.00</MinSubPrice></Text>
          </View>
          <View>
            <LargeImage source={FoodeOne} />
            <Text>Picanha na Chapa com Fritas</Text>
            <Text><MinPrice>R$ 50.00</MinPrice> <MinSubPrice>R$ 66.00</MinSubPrice></Text>
          </View>
          <View>
            <LargeImage source={FoodeOne} />
            <Text>Picanha na Chapa com Fritas</Text>
            <Text><MinPrice>R$ 50.00</MinPrice> <MinSubPrice>R$ 66.00</MinSubPrice></Text>
          </View>
        </SwipeProm>
        <LineBreak />
        <SubTitle>Cervejas</SubTitle>
        <View>
        <ItemCard>
          <Content>
            <RoundedImage source={Beer} />
            <View>
              <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              <Text>Bebida - 600ml</Text>
            </View>
          </Content>
          <Price>R$ 9.00</Price>
        </ItemCard>
        <ItemCard>
          <Content>
            <RoundedImage source={Beer} />
            <View>
              <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              <Text>Bebida - 600ml</Text>
            </View>
          </Content>
          <Price>R$ 9.00</Price>
        </ItemCard>
        <ItemCard>
          <Content>
            <RoundedImage source={Beer} />
            <View>
              <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              <Text>Bebida - 600ml</Text>
            </View>
          </Content>
          <Price>R$ 9.00</Price>
        </ItemCard>
        <ItemCard>
          <Content>
            <RoundedImage source={Beer} />
            <View>
              <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              <Text>Bebida - 600ml</Text>
            </View>
          </Content>
          <Price>R$ 9.00</Price>
        </ItemCard>
        <ItemCard>
          <Content>
            <RoundedImage source={Beer} />
            <View>
              <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              <Text>Bebida - 600ml</Text>
            </View>
          </Content>
          <Price>R$ 9.00</Price>
        </ItemCard>
        </View>
        <SubTitle>Cervejas</SubTitle>
        <View>
        <ItemCard>
          <Content>
            <RoundedImage source={Beer} />
            <View>
              <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              <Text>Bebida - 600ml</Text>
            </View>
          </Content>
          <Price>R$ 9.00</Price>
        </ItemCard>
        <ItemCard>
          <Content>
            <RoundedImage source={Beer} />
            <View>
              <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              <Text>Bebida - 600ml</Text>
            </View>
          </Content>
          <Price>R$ 9.00</Price>
        </ItemCard>
        <ItemCard>
          <Content>
            <RoundedImage source={Beer} />
            <View>
              <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              <Text>Bebida - 600ml</Text>
            </View>
          </Content>
          <Price>R$ 9.00</Price>
        </ItemCard>
        <ItemCard>
          <Content>
            <RoundedImage source={Beer} />
            <View>
              <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              <Text>Bebida - 600ml</Text>
            </View>
          </Content>
          <Price>R$ 9.00</Price>
        </ItemCard>
        <ItemCard>
          <Content>
            <RoundedImage source={Beer} />
            <View>
              <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              <Text>Bebida - 600ml</Text>
            </View>
          </Content>
          <Price>R$ 9.00</Price>
        </ItemCard>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </Background>
  );
}


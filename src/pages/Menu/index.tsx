import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { PageTitle, Price, LineBreak, MinPrice, MinSubPrice } from '../../styles/global';
import { 
  Background, MenuHeader, CategoryItem, 
  SwipeMenu, Search, SubTitle, LargeImage,
  SwipeProm, Icon } from './styles'

import FoodeOne from '../../assets/food01.png'
import FoodeTwo from '../../assets/food02.png'
import FoodeThree from '../../assets/food03.png'
import Beer from '../../assets/beer.png'
import BeerIcon from '../../assets/beerIcon.png'


import { ItemCard, Content, RoundedImage, ItemTitle } from '../../components/ItemList';
import { Modal } from '../../components/Modal';

export default function App() {
  const [activeModalItem, setActiveModalItem] = useState(false)

  return (
    <>
      <Background>
        <MenuHeader>
          <PageTitle>Mesa 12</PageTitle>
          <Search placeholder="Pesquisar pratos" />
            <SwipeMenu 
              horizontal={true} 
              showsHorizontalScrollIndicator={false}>
              <CategoryItem>
                <Icon source={BeerIcon} />
                <Text>Categoria</Text>
              </CategoryItem>
              <CategoryItem>
                <Icon source={BeerIcon} />
                <Text>Categoria</Text>
              </CategoryItem>
              <CategoryItem>
                <Icon source={BeerIcon} />
                <Text>Categoria</Text>
              </CategoryItem>
              <CategoryItem>
                <Icon source={BeerIcon} />
                <Text>Categoria</Text>
              </CategoryItem>
              <CategoryItem>
                <Icon source={BeerIcon} />
                <Text>Categoria</Text>
              </CategoryItem>
              <CategoryItem>
                <Icon source={BeerIcon} />
                <Text>Categoria</Text>
              </CategoryItem>
              <CategoryItem>
                <Icon source={BeerIcon} />
                <Text>Categoria</Text>
              </CategoryItem>
              <CategoryItem>
                <Icon source={BeerIcon} />
                <Text>Categoria</Text>
              </CategoryItem>
              <CategoryItem>
                <Icon source={BeerIcon} />
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
              <LargeImage source={FoodeTwo} />
              <Text>Picanha na Chapa com Fritas</Text>
              <Text><MinPrice>R$ 50.00</MinPrice> <MinSubPrice>R$ 66.00</MinSubPrice></Text>
            </View>
            <View>
              <LargeImage source={FoodeOne} />
              <Text>Picanha na Chapa com Fritas</Text>
              <Text><MinPrice>R$ 50.00</MinPrice> <MinSubPrice>R$ 66.00</MinSubPrice></Text>
            </View>
            <View>
              <LargeImage source={FoodeTwo} />
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
          <ItemCard onPress={() => setActiveModalItem(true)}>
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
      <Modal active={activeModalItem} setActive={setActiveModalItem} cover={FoodeThree}>
        <Text>Picanha na Chapa com Fritas</Text>
        <Text>Medalhão de picanha feiro na  chapa com manteiga de garrafa</Text>
      </Modal>
    </>
  );
}


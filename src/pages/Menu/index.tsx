import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { 
  PageTitle, Price, LineBreak, MinPrice, MinSubPrice,
  SubPrice, ArrowBack } from '../../styles/global';
import { 
  Background, MenuHeader, CategoryItem, 
  SwipeMenu, Search, SubTitle, LargeImage,
  SwipeProm, Icon, Popup } from './styles'

import FoodeOne from '../../assets/food01.png'
import FoodeTwo from '../../assets/food02.png'
import FoodeThree from '../../assets/food03.png'
import Beer from '../../assets/beer.png'
import BeerIcon from '../../assets/beerIcon.png'
import ArrowLeft from '../../assets/arrow-left.svg'


import { ItemCard, Content, RoundedImage, ItemTitle } from '../../components/ItemList';
import { 
  Modal, ModalInfo, ModalDetail, ModalTag, 
  ModalFooter, ModalTitle, ModalFooterText,
  ModalFooterButton } from '../../components/Modal';

export default function App({ navigation }) {
  const [activeModalItem, setActiveModalItem] = useState(false)
  const [activeModalOrder, setActiveModalOrder] = useState(false)
  const [activePopup, setActivePopup] = useState(true)

  return (
    <>
      <Background>
        <MenuHeader>
            <PageTitle>Mesa 12</PageTitle>
            <ArrowBack onPress={() => navigation.goBack()}><ArrowLeft /></ArrowBack>
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
      <Popup active={activePopup} onPress={() => setActiveModalOrder(true)}>
        <ModalFooterText>Ver bandeija</ModalFooterText>
        <ModalFooterText>R$ 70.00</ModalFooterText>
      </Popup>
      <Modal active={activeModalItem} setActive={setActiveModalItem} cover={FoodeThree}>
        <ModalDetail>
          <ModalTitle>Picanha na Chapa com Fritas</ModalTitle>
          <Text>Medalhão de picanha feiro na  chapa com manteiga de garrafa</Text>
          <Text>A partir de  <Price>R$ 70.00</Price> <SubPrice>R$88.00</SubPrice></Text>
        </ModalDetail>
        <ModalInfo>
          <Text>Escolha o tamanho 0 de 1</Text>
          <ModalTag>Obrigatório</ModalTag>
        </ModalInfo>
        <ScrollView>
        <ItemCard>
            <Content>
              <RoundedImage source={Beer} />
              <View>
                <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              </View>
            </Content>
            <Price>R$ 9.00</Price>
            <Text>Test</Text>
          </ItemCard>
          <ItemCard>
            <Content>
              <RoundedImage source={Beer} />
              <View>
                <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              </View>
            </Content>
            <Price>R$ 9.00</Price>
            <Text>Test</Text>
          </ItemCard>
           <ItemCard>
            <Content>
              <RoundedImage source={Beer} />
              <View>
                <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
              </View>
            </Content>
            <Price>R$ 9.00</Price>
            <Text>Test</Text>
          </ItemCard>
        </ScrollView>
        <ModalFooter>
          <Text></Text>
          <ModalFooterText>Adicionar</ModalFooterText>
          <ModalFooterText>R$ 10.00</ModalFooterText>
        </ModalFooter>
      </Modal>
      <Modal active={activeModalOrder} setActive={setActiveModalOrder} title="Seus pedidos">
      <ScrollView>
        <ItemCard>
            <Content>
              <RoundedImage source={Beer} />
              <View>
                <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
                <Text>+ Item 01</Text>
                <Text>+ Item 01</Text>
                <Text>+ Item 01</Text>
              </View>
            </Content>
            <Price>R$ 9.00</Price>
            <Text>Test</Text>
          </ItemCard>
          <ItemCard>
            <Content>
              <RoundedImage source={Beer} />
              <View>
                <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
                <Text>+ Item 01</Text>
                <Text>+ Item 01</Text>
                <Text>+ Item 01</Text>
                <Text>+ Item 01</Text>
              </View>
            </Content>
            <Price>R$ 9.00</Price>
            <Text>Test</Text>
          </ItemCard>
        </ScrollView>
        <ModalFooter>
          <View>
            <ModalFooterText>Total</ModalFooterText>
            <ModalFooterText>R$ 100.00</ModalFooterText>
          </View>
          <TouchableOpacity>
            <ModalFooterButton>Enviar pedido</ModalFooterButton>
          </TouchableOpacity>
        </ModalFooter>
      </Modal>
    </>
  );
}


import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'

import { Title, Card, PageTitle, ArrowBack, LineBreak, ListItem, Price } from '../../styles/global'
import { Background, Item } from './styles'

import Beer from '../../assets/beer.png'
import ArrowLeft from '../../assets/arrow-left.svg'

import { ScrollView } from 'react-native-gesture-handler';
import { Content, ItemTitle, RoundedImage } from '../../components/ItemList';

export default function App({ navigation }) {
    return (
        <Background>
            <PageTitle>Conta do clientes</PageTitle>
            <LineBreak />
            <ScrollView>
                <Item>
                    <Content>
                    <RoundedImage source={Beer} />
                    <View>
                        <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
                        <ListItem>+ Item 01</ListItem>
                        <ListItem>+ Item 01</ListItem>
                    </View>
                    </Content>
                    <Price>R$ 9.00</Price>
                </Item>
                <Item>
                    <Content>
                    <RoundedImage source={Beer} />
                    <View>
                        <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
                    </View>
                    </Content>
                    <Price>R$ 9.00</Price>
                </Item>
                <Item>
                    <Content>
                    <RoundedImage source={Beer} />
                    <View>
                        <ItemTitle>Skol - Cerveja Skol Pilsen</ItemTitle>
                    </View>
                    </Content>
                    <Price>R$ 9.00</Price>
                </Item>
            </ScrollView>
           <ArrowBack onPress={() => navigation.goBack()}><ArrowLeft /></ArrowBack>
            <StatusBar style="dark" />
        </Background>
    )
}
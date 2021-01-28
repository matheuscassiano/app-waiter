import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { Background, PageTitle, ArrowBack } from '../../styles/global'
import { Content, Info, Token, Buttons } from './styles'

import ArrowLeft from '../../assets/arrow-left.svg'
import { MidButton } from '../../components/Button'

import Balcony from '../../assets/balcony.svg'

export default function App({ navigation }) {
    return (
        <Background>
            <PageTitle>Pedidos no balcão</PageTitle>
            <Content>
                <Balcony />
                <Info>Digite um Token valide ou faça um pedido manualmente</Info>
                <Token placeholder="Digite o Token" />
                <Buttons>
                    <MidButton color="#08AF24" onPress={() => console.log(false)}>Validar Token</MidButton>
                    <MidButton color="#57C367" onPress={() => console.log(false)}>Pedir manualmente</MidButton>
                </Buttons>
            </Content>
           <ArrowBack onPress={() => navigation.goBack()}><ArrowLeft /></ArrowBack>
            <StatusBar style="dark" />
        </Background>
    )
}
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { 
    PageTitle, ArrowBack, More, MoreModal, MoreModalItem, Price, 
    ButtonContainer, InputField } from '../../styles/global'
import { 
    Background, Info, InfoText, InfoLine, 
    InfoBig, PaymentScroll, MoneyImage, Card,
    Item } from './styles'

import ArrowLeft from '../../assets/arrow-left.svg'
import MoreIcon from '../../assets/more.svg'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { MidButton } from '../../components/Button'
import { Modal } from '../../components/Modal'

export default function App({ navigation }) {
    const [moreActive, setMoreActive] = useState(false)
    const [quatityActive, setQuatityActive] = useState(false)
    const [transferActive, setTransferActive] = useState(false)
    return (
        <Background>
            <PageTitle>Mesa 12</PageTitle>
            <Info>
                <InputField placeholder="Cupom de desconto" />
                <InfoLine>
                    <InfoText>Subtotal</InfoText>
                    <Price><InfoText>R$ 256.00</InfoText></Price>
                </InfoLine>
                <InfoLine>
                    <InfoText>Taxa de serviço</InfoText>
                    <Price><InfoText>R$ 256.00</InfoText></Price>
                </InfoLine>
                <InfoLine>
                    <InfoBig>Total</InfoBig>
                    <Price><InfoBig>R$ 256.00</InfoBig></Price>
                </InfoLine>
            </Info>
            <PaymentScroll horizontal={true}>
            <Item>
                    <Card>
                        <MoneyImage />
                    </Card>
                    <Text>Dinheiro</Text>
                </Item>
                <Item>
                    <Card>
                        <MoneyImage />
                    </Card>
                    <Text>Dinheiro</Text>
                </Item>
                <Item>
                    <Card>
                        <MoneyImage />
                    </Card>
                    <Text>Dinheiro</Text>
                </Item>
            </PaymentScroll>
            <ArrowBack onPress={() => navigation.goBack()}><ArrowLeft /></ArrowBack>
            <More onPress={() => setMoreActive(!moreActive)}><MoreIcon /></More>
            <MoreModal active={moreActive}>
                <TouchableOpacity><MoreModalItem>Taxas</MoreModalItem></TouchableOpacity>
                <TouchableOpacity onPress={() => setQuatityActive(true)}><MoreModalItem>Descontos</MoreModalItem></TouchableOpacity>
                <TouchableOpacity><MoreModalItem>Imprimir conta</MoreModalItem></TouchableOpacity>
                <TouchableOpacity><MoreModalItem>Número de pessoas</MoreModalItem></TouchableOpacity>
            </MoreModal>

            <StatusBar style="dark" />
        </Background>
    )
}
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { 
    PageTitle, ArrowBack, More, MoreModal, MoreModalItem, 
    LineBreak, ListItem, Price, ButtonContainer, InputField } from '../../styles/global'
import { 
    Background, Item, Info, InfoText, InfoBold, InfoLine, 
    InfoBig, ModalPadding} from './styles'

import Beer from '../../assets/beer.png'
import ArrowLeft from '../../assets/arrow-left.svg'
import MoreIcon from '../../assets/more.svg'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Content, ItemTitle, RoundedImage } from '../../components/ItemList'
import { MidButton } from '../../components/Button'
import Add from '../../components/Add'
import { Modal } from '../../components/Modal'

export default function App({ navigation }) {
    const [moreActive, setMoreActive] = useState(false)
    const [quatityActive, setQuatityActive] = useState(false)
    const [transferActive, setTransferActive] = useState(false)
    return (
        <>
            <Background>
                <PageTitle>Conta do clientes</PageTitle>
                <Info>
                    <InfoText><InfoBold>Cliente:</InfoBold> José de almeidas</InfoText>
                    <InfoText><InfoBold>Qtd. Pessoas:</InfoBold> 3</InfoText>
                    <InfoText><InfoBold>Senha do cardápio:</InfoBold> F4GH34J4</InfoText>
                </Info>
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
                    <Info>
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
                        <ButtonContainer>
                            <MidButton color="#EED535" onPress={() => console.log('oi')}>Fechar Conta</MidButton>
                            <MidButton color="#08AF24" onPress={() => navigation.navigate('Payment')}>Pagar Conta</MidButton>
                        </ButtonContainer>
                    </Info>
                </ScrollView>
                <Add onPress={() => navigation.navigate('Menu')} />
                <ArrowBack onPress={() => navigation.goBack()}><ArrowLeft /></ArrowBack>
                <More onPress={() => setMoreActive(!moreActive)}><MoreIcon /></More>
                <MoreModal active={moreActive}>
                    <TouchableOpacity><MoreModalItem>Editar</MoreModalItem></TouchableOpacity>
                    <TouchableOpacity onPress={() => setQuatityActive(true)}><MoreModalItem>Editar Qtd de Pessoas</MoreModalItem></TouchableOpacity>
                    <TouchableOpacity><MoreModalItem>Excluir mesa</MoreModalItem></TouchableOpacity>
                    <TouchableOpacity><MoreModalItem>Selecionar e dividir</MoreModalItem></TouchableOpacity>
                    <TouchableOpacity onPress={() => setTransferActive(true)}><MoreModalItem>Trocar mesa</MoreModalItem></TouchableOpacity>
                    <TouchableOpacity><MoreModalItem>Transferir item</MoreModalItem></TouchableOpacity>
                    <TouchableOpacity><MoreModalItem>Imprimir Conta</MoreModalItem></TouchableOpacity>
                    <TouchableOpacity><MoreModalItem>Visualizar por Item</MoreModalItem></TouchableOpacity>
                </MoreModal>
            </Background>
            <Modal active={quatityActive} setActive={setQuatityActive}>
                <ModalPadding>
                    <InputField placeholder="Quantidade de pessoas na mesa" />
                    <ButtonContainer>
                        <MidButton color="#CE6F64" onPress={() => setQuatityActive(false)}>Cancelar</MidButton>
                        <MidButton color="#08AF24" onPress={() => setQuatityActive(false)}>Aplicar</MidButton>
                    </ButtonContainer>
                </ModalPadding>
            </Modal>
            <Modal active={transferActive} setActive={setTransferActive}>
                <ModalPadding>
                    <InputField placeholder="Mesa destino" />
                    <ButtonContainer>
                        <MidButton color="#CE6F64" onPress={() => setTransferActive(false)}>Cancelar</MidButton>
                        <MidButton color="#08AF24" onPress={() => setTransferActive(false)}>Transferir</MidButton>
                    </ButtonContainer>
                </ModalPadding>
            </Modal>
            <StatusBar style="dark" />
        </>
    )
}
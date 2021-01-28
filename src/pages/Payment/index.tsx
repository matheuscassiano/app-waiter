import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image, Text, View } from 'react-native'

import { 
    PageTitle, ArrowBack, More, MoreModal, MoreModalItem, Price, 
    ButtonContainer, InputField } from '../../styles/global'
import { 
    Background, Info, InfoText, InfoLine, 
    InfoBig, MoneyImage, Card, Item, 
    ModalPadding,CreditImage, DebitImage,
    PixImage, PaymentInputContainer } from './styles'

import ArrowLeft from '../../assets/arrow-left.svg'
import MoreIcon from '../../assets/more.svg'
import MasterCard from '../../assets/matercard.png'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Button, MidButton } from '../../components/Button'
import { Modal } from '../../components/Modal'
import { SelectField, SelectFieldContainer } from '../Settings/styles'
import { Picker } from '@react-native-picker/picker'

export default function Payment({ navigation }) {
    const [selected, setSelected] = useState('All')

    const [moreActive, setMoreActive] = useState(false)
    const [discountsActive, setDiscountsActive] = useState(false)
    const [rateActive, setRateActive] = useState(false)
    const [printerActive, setPrinterActive] = useState(false)
    const [peopleActive, setPeopleActive] = useState(false)
    return (
        <>
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
                <ScrollView>
                    <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                        <Item>
                            <Card onPress={() => setSelected('money')}>
                                <MoneyImage active={selected} />
                            </Card>
                            <Text>Dinheiro</Text>
                        </Item>
                        <Item>
                            <Card onPress={() => setSelected('credit')}>
                                <CreditImage active={selected} />
                            </Card>
                            <Text>Dinheiro</Text>
                        </Item>
                        <Item>
                            <Card onPress={() => setSelected('debit')}>
                                <DebitImage active={selected} />
                            </Card>
                            <Text>Dinheiro</Text>
                        </Item>
                        <Item>
                            <Card onPress={() => setSelected('pix')}>
                                <PixImage active={selected} />
                            </Card>
                            <Text>Dinheiro</Text>
                        </Item>
                    </ScrollView>
                    <View>
                        {selected === 'money' ? (
                            <PaymentInputContainer>
                                <InputField placeholder="Valor pago em dinheiro" keyboarType="numeric" />
                                <Button color="#08AF24" >Pagar</Button>
                            </PaymentInputContainer>
                        ): selected === 'credit' ? (
                            <>
                                <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                    <Card><Image source={MasterCard} /></Card>
                                    <Card><Image source={MasterCard} /></Card>
                                    <Card><Image source={MasterCard} /></Card>
                                    <Card><Image source={MasterCard} /></Card>
                                </ScrollView>
                                <PaymentInputContainer>
                                    <InputField placeholder="Valor pago no cartão" keyboarType="numeric" />
                                    <Button color="#08AF24" >Pagar</Button>
                                </PaymentInputContainer>
                            </>
                        ): selected === 'debit' ? (
                            <>
                                <Text>debit</Text>
                            </>
                        ): selected === 'pix' ? (
                            <>
                                <Text>pix</Text>
                            </>
                        ): (<></>)}
                    </View>
                </ScrollView>

                <ArrowBack onPress={() => navigation.goBack()}><ArrowLeft /></ArrowBack>
                <More onPress={() => setMoreActive(!moreActive)}><MoreIcon /></More>
                <MoreModal active={moreActive}>
                    <TouchableOpacity onPress={() => setRateActive(true)}><MoreModalItem>Taxas</MoreModalItem></TouchableOpacity>
                    <TouchableOpacity onPress={() => setDiscountsActive(true)}><MoreModalItem>Descontos</MoreModalItem></TouchableOpacity>
                    <TouchableOpacity onPress={() => setPrinterActive(true)}><MoreModalItem>Imprimir conta</MoreModalItem></TouchableOpacity>
                    <TouchableOpacity onPress={() => setPeopleActive(true)}><MoreModalItem>Número de pessoas</MoreModalItem></TouchableOpacity>
                </MoreModal>

                <StatusBar style="dark" />
            </Background>
            <Modal active={discountsActive} setActive={setDiscountsActive}>
                <ModalPadding>
                    <InputField placeholder="Descontos" />
                    <ButtonContainer>
                        <MidButton color="#CE6F64" onPress={() => setDiscountsActive(false)}>Cancelar</MidButton>
                        <MidButton color="#08AF24" onPress={() => setDiscountsActive(false)}>Aplicar</MidButton>
                    </ButtonContainer>
                </ModalPadding>
            </Modal>
            <Modal active={rateActive} setActive={setRateActive}>
                <ModalPadding>
                    <InputField placeholder="Tipo de taxa" />
                    <InputField placeholder="Valor da taxa" keyboardType={'numeric'} />
                    <ButtonContainer>
                        <MidButton color="#CE6F64" onPress={() => setRateActive(false)}>Cancelar</MidButton>
                        <MidButton color="#08AF24" onPress={() => setRateActive(false)}>Aplicar</MidButton>
                    </ButtonContainer>
                </ModalPadding>
            </Modal>
            <Modal active={printerActive} setActive={setPrinterActive}>
                <ModalPadding>
                <SelectFieldContainer>
                    <SelectField
                    mode="dropdown"
                    selectedValue={"default"}
                    onValueChange={(itemValue) => console.log('oi')}>
                        <Picker.Item label="Empressora padrão" value="default" />
                        <Picker.Item label="Empressora Um" value="1" />
                        <Picker.Item label="Empressora Dois" value="2" />
                        <Picker.Item label="Empressora Três" value="3" />
                        <Picker.Item label="Empressora Quatro" value="4" />
                    </SelectField>
                </SelectFieldContainer>
                    <ButtonContainer>
                        <MidButton color="#CE6F64" onPress={() => setPrinterActive(false)}>Cancelar</MidButton>
                        <MidButton color="#08AF24" onPress={() => setPrinterActive(false)}>Imprimir</MidButton>
                    </ButtonContainer>
                </ModalPadding>
            </Modal>
            <Modal active={peopleActive} setActive={setPeopleActive}>
                <ModalPadding>
                    <InputField placeholder="Número de pessoas" keyboardType={'numeric'} />
                    <ButtonContainer>
                        <MidButton color="#CE6F64" onPress={() => setPeopleActive(false)}>Cancelar</MidButton>
                        <MidButton color="#08AF24" onPress={() => setPeopleActive(false)}>Aplicar</MidButton>
                    </ButtonContainer>
                </ModalPadding>
            </Modal>
        </>
    )
}
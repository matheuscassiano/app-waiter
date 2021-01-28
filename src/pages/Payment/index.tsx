import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { 
    PageTitle, ArrowBack, More, MoreModal, MoreModalItem, 
    LineBreak, ListItem, Price, ButtonContainer, InputField } from '../../styles/global'
import { 
    Background, Item, Info, InfoText, InfoBold, InfoLine, 
    InfoBig, 
    ModalPadding} from './styles'

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
        <Background>
            <PageTitle>Mesa 12</PageTitle>
            <ArrowBack><ArrowLeft /></ArrowBack>
            <StatusBar style="dark" />
        </Background>
    )
}
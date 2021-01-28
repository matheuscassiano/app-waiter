import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import ToggleSwitch from 'toggle-switch-react-native'

import { Background, Title, Card, PageTitle, ArrowBack } from '../../styles/global'
import { Label, SwitchGroup, SelectField, SelectFieldContainer } from './styles'

import ArrowLeft from '../../assets/arrow-left.svg'
import SettingsImage from '../../assets/settings.svg'

export default function App({ navigation }) {
    const [ordersActive, setOrdersActive] = useState(false)
    return (
        <Background>
            <PageTitle>Pedidos no balcão</PageTitle>
            
           <ArrowBack onPress={() => navigation.goBack()}><ArrowLeft /></ArrowBack>
            <StatusBar style="dark" />
        </Background>
    )
}
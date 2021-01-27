import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { Name } from './styles'

import AvatarImage from '../../assets/avatar.png'
import Star from '../../assets/star.svg'
import { Text } from 'react-native'
import { MidButton } from '../../components/Button'
import { Background, Title, Card, PageTitle } from '../../styles/global'

export default function App({ navigation }) {
    return (
        <Background>
           <PageTitle>Configurações</PageTitle>
            <StatusBar style="dark" />
        </Background>
    )
}
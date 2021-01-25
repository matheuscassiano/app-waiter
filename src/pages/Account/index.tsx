import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { Background, Title, Card, Avatar, Name, StarContainer } from './styles'

import AvatarImage from '../../assets/avatar.png'
import Star from '../../assets/star.svg'
import { Text, ScrollView, View } from 'react-native'
import { Button } from '../../components/Button'

export default function App({ navigation }) {
    return (
        <Background>
            <Title>Perfil</Title>
            <Card>
                <Avatar source={AvatarImage} />
                <Name>Carlos Barbosa da Silva</Name>
                <StarContainer>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </StarContainer>
                <Text>Garçom</Text>
            </Card>
            <Button color="#08AF24" onPress={() => console.log('oi')}>Teste</Button>
            <Button color="#CE6F64" onPress={() => console.log('oi')}>Teste</Button>
            <StatusBar style="light" />
        </Background>
    )
}
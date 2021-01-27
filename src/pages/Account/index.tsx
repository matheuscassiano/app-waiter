import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { 
    Background, Avatar, Name, StarContainer, 
    Content, ContentTitle, InputGroup } from './styles'

import AvatarImage from '../../assets/avatar.png'
import Star from '../../assets/star.svg'
import { Text } from 'react-native'
import { MidButton } from '../../components/Button'
import { InputField, Title, Card, ButtonContainer } from '../../styles/global'

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
            <Content>
                <ContentTitle>Editar Perfil</ContentTitle>
                <InputGroup>
                    <Text>Editar nome</Text>
                    <InputField value="Carlos Barbosa da Silva" />
                </InputGroup>
                <InputGroup>
                    <Text>Editar nome</Text>
                    <InputField value="carlosbarbosa" />
                </InputGroup>
                <InputGroup>
                    <Text>Editar nome</Text>
                    <InputField placeholder="Digite sua senha"/>
                    <InputField placeholder="Digite sua senha novamente" />
                </InputGroup>
                <ButtonContainer>
                    <MidButton color="#08AF24" onPress={() => console.log('oi')}>Salvar</MidButton>
                    <MidButton color="#CE6F64" onPress={() => console.log('oi')}>Cancelar</MidButton>
                </ButtonContainer>
            </Content>
            <StatusBar style="light" />
        </Background>
    )
}
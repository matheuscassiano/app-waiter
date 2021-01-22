import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import { BackgroundImage, InputField, PageTitle } from '../../styles/global';

import backgroundLogin from '../../assets/backgroundLogin.png'

export default function App() {
  return (
    <BackgroundImage source={ backgroundLogin }>
      <PageTitle>Login</PageTitle>
      <InputField placeholder="Usuário" />
      <InputField placeholder="Senha" secureTextEntry={true} />
      <Text>Esqueceu a senha</Text>
      <Button>test</Button>
      <StatusBar style="auto" />
    </BackgroundImage>
  );
}
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import { Background, InputField, PageTitle } from '../../styles/global';

export default function App() {
  return (
    <Background>
      <PageTitle>Login</PageTitle>
      <InputField placeholder="Usuário" />
      <InputField placeholder="Senha" secureTextEntry={true} />
      <Text>Esqueceu a senha</Text>
      <Button>test</Button>
      <StatusBar style="auto" />
    </Background>
  );
}
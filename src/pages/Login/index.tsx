import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { Button } from '../../components/Button'
import { BackgroundImage, InputField, PageTitle } from '../../styles/global'
import { ForgotPass } from './styles'

import backgroundLogin from '../../assets/backgroundLogin.png'

export default function App() {
  return (
    <BackgroundImage source={ backgroundLogin }>
      <PageTitle color="white">Login</PageTitle>
      <InputField placeholder="Usuário" />
      <InputField placeholder="Senha" secureTextEntry={true} />
      <ForgotPass color="white">Esqueceu a senha</ForgotPass>
      <Button color="#08AF24">Entrar</Button>
      <StatusBar style="light" />
    </BackgroundImage>
  )
}
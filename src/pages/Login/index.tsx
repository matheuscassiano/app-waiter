import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { Button } from '../../components/Button'
import { BackgroundImage, InputField } from '../../styles/global'
import { ForgotPass } from './styles'


import Logo from '../../assets/logo.svg'
import backgroundLogin from '../../assets/backgroundLogin.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App({ navigation }) {
  return (
    <BackgroundImage source={ backgroundLogin }>
      <Logo />
      <InputField placeholder="Usuário" />
      <InputField placeholder="Senha" secureTextEntry={true} />
      <TouchableOpacity>
        <ForgotPass color="white">Esqueceu a senha</ForgotPass>
      </TouchableOpacity>
      <Button color="#08AF24" onPress={() => navigation.push('MainMenu')}>Entrar</Button>
      <StatusBar style="light" />
    </BackgroundImage>
  )
}
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Svg, { Circle, Rect, Path } from 'react-native-svg';

import { Background, PageTitle } from '../../styles/global'


export default function App({ navigation }) {
  return (
    <Background>
      <PageTitle>Comanda Mobile</PageTitle>
      <StatusBar style="dark" />
    </Background>
  )
}
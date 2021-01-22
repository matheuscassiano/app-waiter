import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Svg, { Circle, Rect, Path } from 'react-native-svg'
import { Text } from 'react-native'

import { Background, PageTitle } from '../../styles/global'
import { MenuButton, MenuContainer } from './styles'

export default function App({ navigation }) {
  return (
    <Background>
      <PageTitle>Comanda Mobile</PageTitle>
      <MenuContainer>
        <MenuButton>
          <Text>test</Text>
        </MenuButton>
        <MenuButton>
          <Text>test</Text>
        </MenuButton>
        <MenuButton>
          <Text>test</Text>
        </MenuButton>
        <MenuButton>
          <Text>test</Text>
        </MenuButton>
        <MenuButton>
          <Text>test</Text>
        </MenuButton>
        <MenuButton>
          <Text>test</Text>
        </MenuButton>
      </MenuContainer>
      <StatusBar style="dark" />
    </Background>
  )
}
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'

import { Background, PageTitle } from '../../styles/global'
import { MenuButton, MenuContainer, Icon } from './styles'

import TablesIcon from '../../assets/tablesIcon.png'
import BalconyIcon from '../../assets/balconyIcon.png'
import MenuIcon from '../../assets/menuIcon.png'
import OrdersIcon from '../../assets/ordersIcon.png'
import SettingsIcon from '../../assets/settingsIcon.png'
import AccountIcon from '../../assets/accountIcon.png'

export default function App({ navigation }) {
  return (
    <Background>
      <PageTitle>Comanda Mobile</PageTitle>
      <MenuContainer>
        <MenuButton onPress={() => navigation.push('Tables')}>
          <Icon source={ TablesIcon } />
          <Text>Mesas</Text>
        </MenuButton>
        <MenuButton>
          <Icon source={ BalconyIcon } />
          <Text>Balcão</Text>
        </MenuButton>
        <MenuButton onPress={() => navigation.push('Menu')}>
          <Icon source={ MenuIcon } />
          <Text>Cardápio</Text>
        </MenuButton>
        <MenuButton  onPress={() => navigation.push('Orders')}>
          <Icon source={ OrdersIcon } />
          <Text>Pedidos</Text>
        </MenuButton>
        <MenuButton onPress={() => navigation.push('Settings')}>
          <Icon source={ SettingsIcon } />
          <Text>Configurações</Text>
        </MenuButton>
        <MenuButton onPress={() => navigation.push('Account')}>
          <Icon source={ AccountIcon } />
          <Text>Conta</Text>
        </MenuButton>
      </MenuContainer>
      <StatusBar style="dark" />
    </Background>
  )
}
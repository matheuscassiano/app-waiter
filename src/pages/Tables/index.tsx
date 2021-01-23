import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Svg, { Circle, Rect, Path } from 'react-native-svg'
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
      <PageTitle>Mesas</PageTitle>
      
      <StatusBar style="dark" />
    </Background>
  )
}
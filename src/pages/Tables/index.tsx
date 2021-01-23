import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Svg, { Circle, Rect, Path, Image } from 'react-native-svg'
import { Text, View } from 'react-native'

import { Background, InputField, PageTitle } from '../../styles/global'
import { TopBar, Search } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

import TableImage from '../../assets/table.svg'

export default function App({ navigation }) {
  return (
    <Background>
      <TopBar>
        <TouchableOpacity>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Search placeholder="Pesquisar por mesas ou clientes"/>
      </TopBar>
      <TableImage />
      {/* <Image source={ {uri: '../../assets/tables.svg'}} /> */}
      <StatusBar style="dark" />
    </Background>
  )
}
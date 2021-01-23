import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Background, InputField, PageTitle } from '../../styles/global'
import { TopBar, Search, TableContainer } from './styles'

import TableImage from '../../assets/table.svg'
import ArrowLeft from '../../assets/arrow-left.svg'

export default function App({ navigation }) {
  return (
    <Background>
      <TopBar>
        <TouchableOpacity>
          <ArrowLeft />
        </TouchableOpacity>
        <Search placeholder="Pesquisar por mesas ou clientes"/>
      </TopBar>
      <TableContainer>
        <TableImage />
        <TableImage />
        <TableImage />
        <TableImage />
        <TableImage />
        <TableImage />
      </TableContainer>
      <StatusBar style="dark" />
    </Background>
  )
}
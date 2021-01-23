import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Background, InputField, PageTitle } from '../../styles/global'
import { TopBar, Search, TableContainer, Table } from './styles'

import ArrowLeft from '../../assets/arrow-left.svg'
import { Text, ScrollView } from 'react-native'

export default function App({ navigation }) {
  return (
    <Background>
      <TopBar>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
        <Search placeholder="Pesquisar por mesas ou clientes"/>
      </TopBar>
      <ScrollView 
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}>
        <TableContainer>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
          <Table>
            <Text>1</Text>
          </Table>
        </TableContainer>
      </ScrollView>
      <StatusBar style="dark" />
    </Background>
  )
}
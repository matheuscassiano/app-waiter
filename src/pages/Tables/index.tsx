import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, ScrollView } from 'react-native'

import { Background, InputField, PageTitle } from '../../styles/global'
import { TopBar, Search, TableContainer, Item, ItemNumber } from './styles'

import ArrowLeft from '../../assets/arrow-left.svg'
import Table from '../../assets/table.svg'

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
        <Item>
            <Table />
            <ItemNumber>1</ItemNumber>
          </Item>
          <Item>
            <Table />
            <ItemNumber>2</ItemNumber>
          </Item>
          <Item>
            <Table />
            <ItemNumber>3</ItemNumber>
          </Item>
          <Item>
            <Table />
            <ItemNumber>4</ItemNumber>
          </Item>
          <Item>
            <Table />
            <ItemNumber>5</ItemNumber>
          </Item>
          <Item>
            <Table />
            <ItemNumber>6</ItemNumber>
          </Item>
          <Item>
            <Table />
            <ItemNumber>7</ItemNumber>
          </Item>
          <Item>
            <Table />
            <ItemNumber>8</ItemNumber>
          </Item>
          <Item>
            <Table />
            <ItemNumber>9</ItemNumber>
          </Item>
          <Item>
            <Table />
            <ItemNumber>10</ItemNumber>
          </Item>
          <Item>
            <Table />
            <ItemNumber>11</ItemNumber>
          </Item>
          <Item>
            <Table />
            <ItemNumber>12</ItemNumber>
          </Item>
        </TableContainer>
      </ScrollView>
      <StatusBar style="dark" />
    </Background>
  )
}
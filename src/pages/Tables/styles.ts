import styled from 'styled-components/native'
import {  InputField } from '../../styles/global'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

export const TopBar = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Search = styled(InputField)`
    width: ${windowWidth - 120}px;
`

export const TableContainer = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin: 40px 0;
`

export const Item = styled.TouchableOpacity`
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`

export const ItemNumber = styled.Text`
    color: white;
    font-size: 25px;
    font-weight: 700;
    position: absolute;
`
import styled from 'styled-components/native'
import {  InputField } from '../../styles/global'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
import TableImage from '../../assets/table.svg'

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

export const Table = styled(TableImage)`
    margin-bottom: 20px
`
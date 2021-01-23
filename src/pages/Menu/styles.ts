import styled from 'styled-components/native'
import { StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native'

import { InputField } from '../../styles/global'
const windowWidth = Dimensions.get('window').width;
const StatusHeight = StatusBar.currentHeight as number

export const Background = styled.View`
    flex: 1;
    background-color: white;
`

export const MenuHeader = styled.View`
    width: 100%;
    display: flex;
    elevation: 10;
    background-color: white;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: ${StatusHeight + 20}px 0 20px;
`

export const Search = styled(InputField)`
    width: ${windowWidth - 64}px;
`

export const CategoryItem = styled.View`
    width: 70px;
    height: 70px;
    display: flex;
    margin-right: 20px;
    background-color: red;

    &:first-child {
        background-color: blue;
    }
`

export const SwipeMenu = styled(ScrollView)`
    width: ${windowWidth - 32}px;
    height: 80px;
    margin: 20px 0 0 32px;
`
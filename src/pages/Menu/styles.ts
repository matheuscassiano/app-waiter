import styled from 'styled-components/native'
import { StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const StatusHeight = StatusBar.currentHeight as number

import { InputField } from '../../styles/global'

export const Background = styled.View`
    flex: 1;
    background-color: white;
`

export const MenuHeader = styled.View`
    width: 100%;
    display: flex;
    elevation: 5;
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
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 15px 20px 0 0;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
`

export const SwipeMenu = styled(ScrollView)`
    width: 100%;
    padding-left: 32px;
`

export const Icon = styled.Image`
    width: 25px;
    height: 25px;
    margin-bottom: 5px;
`

export const SubTitle = styled.Text`
    width: 100%;
    font-size: 30px;
    font-weight: 600;
    margin: 20px 0 24px 32px;
`

export const LargeImage = styled.Image`
    width: ${windowWidth * .6}px;
    height: ${windowWidth * .3}px;
    margin: 0 20px 15px 0;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
`

export const SwipeProm = styled(ScrollView)`
    padding: 0 32px;
`
export const Popup = styled.View`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 32px;
    position: absolute;
    bottom: 16px;
    left: 10%;
    border-radius: 20px;
    background-color: #08AF24;
`
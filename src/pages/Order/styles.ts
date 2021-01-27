import styled from 'styled-components/native'
import { StatusBar } from 'react-native'
import { ItemCard } from '../../components/ItemList'

const StatusHeight = StatusBar.currentHeight as number

export const Background = styled.View`
    height: 100%;
    justify-content: flex-start;
    padding-top: ${StatusHeight + 20}px;
    background-color: white;
`

export const Info = styled.View`
    width: 100%;
    padding: 20px 32px 8px;
`

export const InfoText = styled.Text`
    font-size: 18px;
    font-weight: 500;
    padding: 3px;
`

export const InfoBold = styled.Text`
    font-weight: 700;
`

export const InfoLine = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const InfoBig = styled.Text`
    font-size: 23px;
    font-weight: 700;
`

export const Item = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 32px;
    border-bottom-width: .3px;
    border-bottom-color: #00000030;
`

export const ModalPadding = styled.View`
    padding: 0 32px;
`
import styled from 'styled-components/native'
import { StatusBar } from 'react-native'

import Money from '../../assets/money.svg'

const StatusHeight = StatusBar.currentHeight as number

export const Background = styled.View`
    height: 100%;
    justify-content: flex-start;
    padding-top: ${StatusHeight + 20}px;
    background-color: white;
`

export const Info = styled.View`
    width: 100%;
    padding: 32px 32px 0;
`

export const InfoText = styled.Text`
    font-size: 18px;
    font-weight: 500;
    padding: 3px;
`

export const InfoLine = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const InfoBig = styled.Text`
    font-size: 23px;
    font-weight: 700;
    padding-top: 10px;
`

export const PaymentScroll = styled.ScrollView`
    padding: 16px;
`

export const ModalPadding = styled.View`
`

export const MoneyImage = styled(Money)`
`

export const Card = styled.TouchableOpacity`
    margin: 16px;
    padding: 16px;
    background-color: #FFFFFF;
    border-radius: 16px;
    elevation: 8;
    box-shadow: 0px 0px 8.36842px rgba(0, 0, 0, 0.15);
`

export const Item = styled.View`
    align-items: center;
`
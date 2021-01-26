import styled from 'styled-components/native'
import { Card, PageTitle } from '../../styles/global';

export const TabsTop = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const TabItem = styled.Text`
    font-size: 16px;
    padding: 16px 25px;
    margin-bottom: 32px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    color: ${props => !props.selected ? "#08AF24": "white"};
    background-color: ${props => props.selected ? "#08AF24": "white"};
`

export const OrderCard = styled(Card)`
    padding: 16px 0 0;
    elevation: 5;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const OrderTitle = styled(PageTitle)`
    font-size: 25px;
`

export const OrderText = styled.Text`
    color: #5E5E5E;
    padding: 10px 32px;
`

export const OrderButton = styled.Text`
    width: 100%;
    color: white;
    padding: 16px;
    text-align: center;
    background-color: #08AF24;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`
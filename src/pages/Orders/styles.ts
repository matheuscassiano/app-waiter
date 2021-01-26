import styled from 'styled-components/native'
import { Background, Card, PageTitle } from '../../styles/global';
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

export const OrderBackground = styled(Background)`
    padding-left: 0;
    padding-right: 0;
`

export const TabsTop = styled.View`
    width: ${windowWidth - 64}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const TabItem = styled.Text`
    font-size: 16px;
    padding: 13px 25px;
    margin: 0 6px;
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
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
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

export const OrderTag = styled.Text`
    padding: 2.5px 8px;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    background-color: #DE5753;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`

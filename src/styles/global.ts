import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const StatusHeight = StatusBar.currentHeight as number

export const BackgroundImage = styled.ImageBackground`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 32px;
    padding-left: 32px;
`

export const Background = styled.View`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 32px;
    padding-top: ${StatusHeight + 20}px;
    background-color: white;
`

export const LineBreak = styled.View`
    width: ${windowWidth - 64}px;
    margin: 15px 32px 0;
    border-bottom-width: .3px;
    border-bottom-color: #00000030;
`


export const PageTitle = styled.Text`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
`

export const InputField = styled.TextInput`
    width: 100%;
    height: 48px;
    margin: 8px auto;
    padding-right: 16px;
    padding-left: 16px;
    background-color: white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    elevation: 4;
`
export const Price = styled.Text`
    color: #608F5F;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
`

export const MinPrice = styled.Text`
    color: #8BBE8A;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    margin-right: 10px;
`

export const MinSubPrice = styled.Text`
    color: #A0A0A0;
    font-size: 13px;
    font-weight: 700;
    font-style: italic;
    text-decoration: line-through;
`
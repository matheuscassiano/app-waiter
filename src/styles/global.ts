import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

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
    padding-top: ${StatusHeight + 20}px;
    padding: 0 32px;
    background-color: white;
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
    elevation: 4;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
`
export const Price = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #608F5F;
    text-align: center;
`
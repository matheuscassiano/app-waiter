import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

const StatusHeight = StatusBar.currentHeight as number

export const Background = styled.View`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: ${StatusHeight + 20}px;
    background-color: #08AF24;
`

export const Avatar = styled.Image`
    border-radius: 100px;
`

export const Name = styled.Text`
    font-size: 20px;
    font-weight: 700;
`

export const StarContainer = styled.View`
    width: 150px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
`

export const Content = styled.ScrollView`
    width: 100%;
    elevation: 10;
    padding: 16px 32px;
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const ContentTitle = styled.Text`
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    padding: 16px;
`

export const InputGroup = styled.View`
    margin-bottom: 10px;
`
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

const StatusHeight = StatusBar.currentHeight as number

export const PageTitle = styled.Text`
    margin-top: 50;
    font-size: 25px;
    font-weight: normal;
    text-align: center;
`
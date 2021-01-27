import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native'
import { PageTitle } from '../../styles/global'

const windowWidth = Dimensions.get('window').width;
const StatusHeight = StatusBar.currentHeight as number

export const Label = styled.Text`
    font-size: 16px;
`

export const SwitchGroup = styled.View`
    width: 100%;
    margin: 8px 0;
    flex-direction: row;
    justify-content: space-between;
`

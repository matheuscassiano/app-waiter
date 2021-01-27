import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native'
import { Picker } from '@react-native-picker/picker';
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

export const SelectFieldContainer = styled.View`
    elevation: 5;
    margin-top: 10px;
    padding: 0 12px;
    box-shadow: 0 0 0 black;
    background-color: white;
    border-radius: 12px;
`

export const SelectField = styled(Picker)`
    color: #A0A0A0;
    width: ${windowWidth - 88}px;
`
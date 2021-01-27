import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const windowWidth = Dimensions.get('window').width;

export const Label = styled.Text`
    font-size: 16px;
    margin-top: 10px;
`

export const SwitchGroup = styled.View`
    width: 100%;
    padding: 10px 0;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`

export const SelectFieldContainer = styled.View`
    margin-bottom: 10px;
    padding: 0 12px;
    border-radius: 16px;
    background-color: white;
    border: solid 1px rgba(0, 0, 0, .2);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

export const SelectField = styled(Picker)`
    color: #A0A0A0;
    width: ${windowWidth - 88}px;
`
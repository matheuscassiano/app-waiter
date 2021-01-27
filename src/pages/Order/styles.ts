import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const windowWidth = Dimensions.get('window').width;

export const Label = styled.Text`
    font-size: 16px;
    margin-top: 10px;
`
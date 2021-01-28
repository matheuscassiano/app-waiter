import styled from 'styled-components/native';
import { Dimensions } from 'react-native'
import { ButtonContainer, InputField } from '../../styles/global';


const windowWidth = Dimensions.get('window').width;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Token = styled(InputField)`
    width: ${windowWidth - 75}px;
`

export const Info = styled.Text`
    padding: 16px 32px;
    font-size: 18px;
    text-align: center;
`

export const Buttons = styled(ButtonContainer)`
    margin-top: 0;
`
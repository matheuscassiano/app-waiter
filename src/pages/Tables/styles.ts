import styled from 'styled-components/native'
import {  InputField } from '../../styles/global'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

export const TopBar = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Search = styled(InputField)`
    width: ${windowWidth - 120}px;
    align-self: flex-end;
`
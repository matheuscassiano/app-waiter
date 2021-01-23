import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height;
interface Modal {
    show: Boolean;
}

export const ModalContainer = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: ${(props: Modal) => props.show ? 0 : "100%"};
    background-color: rgba(0, 0, 0, 0.25);
`

export const ModalContent = styled.View`
    width: 100%;
    min-height: 100px;
    position: absolute;
    bottom: 0;
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`

export const ModalHeader = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    position: absolute;
    top: 32px;
    left: 32px;
    z-index: 1;
`

export const Close = styled.TouchableOpacity`
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`

export const Cover = styled.Image`
    width: 100%;
    height: ${props => props.source !== undefined ? windowHeight * .3 : 50}px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`

export const ModalMain = styled.View`
    padding: 16px 32px;
`

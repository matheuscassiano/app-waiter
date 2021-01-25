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
    max-height: ${windowHeight - 235}px;
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
    padding: 5px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`

export const Cover = styled.Image`
    width: 100%;
    height: ${props => props.source !== undefined ? windowHeight * .3 : 70}px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`

export const ModalTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
`

export const ModalDetail = styled.View`
    padding: 16px 32px;
`

export const ModalInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    background-color: #CFD3D8;
`

export const ModalTag = styled.Text`
    color: white;
    padding: 5px 15px;
    font-weight: 700;
    background-color: #363636;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`

export const ModalFooter = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    background-color: #08AF24;
`

export const ModalFooterText = styled.Text`
    color: white;
`


export const ModalFooterButton = styled.Text`
    color: #08AF24;
    font-size: 15px
    font-weight: 700;
    padding: 8px 32px;
    border-radius: 32px;
    background-color: white;
`
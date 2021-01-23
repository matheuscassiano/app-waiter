import styled from 'styled-components/native';

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
    padding: 32px;
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
`

export const ModalHeader = styled.View`
    flex-direction: row;
    margin-bottom: 16px;
`

export const Close = styled.TouchableOpacity`
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`

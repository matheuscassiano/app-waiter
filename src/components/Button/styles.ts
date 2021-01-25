import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px auto;
    padding-right: 16px;
    padding-left: 16px;
    border-radius: 16px;
    background-color: ${props => props.color};
    elevation: 5;
    box-shadow: 0px 0px 4px ${props => props.color}80;
`

export const MidButtonContainer = styled(ButtonContainer)`
    width: 45%;
`

export const InnerText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`

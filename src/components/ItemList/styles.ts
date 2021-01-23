import styled from 'styled-components/native';

export const Item = styled.TouchableOpacity`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 32px;
    border-bottom-color: #00000030;
    border-bottom-width: .3px;
`

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`

export const RoundedImage = styled.Image`
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
`

export const ItemTitle = styled.Text`
    font-size: 15px;
    font-weight: 700;
`

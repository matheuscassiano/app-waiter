import styled from 'styled-components/native';

export const Item = styled.TouchableOpacity`
    max-width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 32px;
    border-bottom-width: .3px;
    border-bottom-color: #00000030;
`

export const Content = styled.View`
    max-width: 60%;
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
    padding-right: 20px;
`

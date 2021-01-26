import styled from 'styled-components/native'

export const TabsTop = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const TabItem = styled.Text`
    padding: 16px 25px;
    font-size: 16px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    color: ${props => !props.selected ? "#08AF24": "white"};
    background-color: ${props => props.selected ? "#08AF24": "white"};
`
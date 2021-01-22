
import styled from 'styled-components/native'

const width = window.innerWidth

export const MenuButton = styled.TouchableOpacity`
    width: ${width * .4}px;
    height: ${width * .4}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    justify-self: center;
    border-radius: 25px;
    box-shadow: 0px 0px 10px rgba(46, 80, 119, 0.25);
`

export const MenuContainer = styled.View`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;
`

export const Icon = styled.Image`
    width: 60%;
    height: 50%;
    margin-bottom: 10px;
    resize-mode: contain;
`
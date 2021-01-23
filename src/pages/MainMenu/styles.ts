import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const MenuButton = styled.TouchableOpacity`
    width: ${windowWidth * .4}px;
    height: ${windowWidth * .4}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 25px;
    /* box-shadow: 10px 5px 5px black; */
    elevation: 5;
    shadowColor: rgba(46, 80, 119, 0.25);
    background-color: white;
    box-shadow: 0px 0px 10px rgba(46, 80, 119, 0.25); 
`

export const MenuContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
`

export const Icon = styled.Image`
    width: 60%;
    height: 50%;
    margin-bottom: 10px;
    resize-mode: contain;
`
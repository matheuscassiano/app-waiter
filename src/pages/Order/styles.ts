import styled from 'styled-components/native';
// import { Dimensions } from 'react-native'
import { StatusBar } from 'react-native';
import { ItemCard } from '../../components/ItemList';

const StatusHeight = StatusBar.currentHeight as number
// const windowWidth = Dimensions.get('window').width;

export const Background = styled.View`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    padding-top: ${StatusHeight + 20}px;
    background-color: white;
`

export const Item = styled.TouchableOpacity`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 32px;
    border-bottom-width: .3px;
    border-bottom-color: #00000030;
`
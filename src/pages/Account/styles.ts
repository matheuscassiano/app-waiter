import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native'
import { PageTitle } from '../../styles/global'

const windowWidth = Dimensions.get('window').width;
const StatusHeight = StatusBar.currentHeight as number

export const Background = styled.View`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 32px;
    padding-top: ${StatusHeight + 20}px;
    background-color: #08AF24;
`
export const Title = styled(PageTitle)`
    color: white;
    margin-bottom: 32px;
`

export const Card = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 60px;
    margin-bottom: 32px;
    border-radius: 20px;
    background-color: white;
    elevation: 20;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
`

export const Avatar = styled.Image`
    border-radius: 100px;
`

export const Name = styled.Text`
    font-size: 20px;
    font-weight: 700;
`

export const StarContainer = styled.View`
    width: 150px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
`

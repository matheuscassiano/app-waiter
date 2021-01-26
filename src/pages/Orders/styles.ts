import styled from 'styled-components/native'
import { Background, Card, PageTitle } from '../../styles/global';
import { Dimensions } from 'react-native'
import { ArrowBack } from '../../styles/global'
import { StatusBar } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const StatusHeight = StatusBar.currentHeight as number

export const OrderBackground = styled(Background)`
    padding-left: 0;
    padding-right: 0;
`

export const MenuScroll = styled.ScrollView`
    height: 64px;
`

export const TabsTop = styled.View`
    width: ${windowWidth - 64}px;
    padding-left: 32px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const TabItem = styled.Text`
    font-size: 16px;
    padding: 13px 25px;
    margin: 0 6px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    color: ${props => !props.selected ? "#08AF24": "white"};
    background-color: ${props => props.selected ? "#08AF24": "white"};
`

export const OrderContainer = styled.ScrollView`
    width: 100%;
    height: 100%;
    /* flex: 1; */
`

export const OrderCard = styled(Card)`
    elevation: 5;
    padding: 16px 0 0;
    margin: 10px auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`

export const OrderTitle = styled(PageTitle)`
    font-size: 25px;
`

export const OrderText = styled.Text`
    color: #5E5E5E;
    padding: 10px 32px;
`

export const OrderButton = styled.Text`
    width: 100%;
    color: white;
    padding: 16px;
    text-align: center;
    background-color: #08AF24;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const OrderTag = styled.Text`
    font-size: 10px;
    padding: 1px 5px;
    position: absolute;
    top: 0;
    right: 5px;
    color: white;
    background-color: #DE5753;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`

export const Back = styled(ArrowBack)`
    top: ${StatusHeight + 38}px;
`

export const OrderItem = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    padding: 16px 64px 16px 32px;
    border-bottom-width: .3px;
    border-bottom-color: #cccccc;
`

export const OrderItemContent = styled.View`
    width: 100%;
    display: ${(props: { active: any; }) => props.active ? "flex" : "none"};
`
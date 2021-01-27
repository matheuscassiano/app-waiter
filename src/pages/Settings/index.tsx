import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import ToggleSwitch from 'toggle-switch-react-native'

import { Background, Title, Card, PageTitle, ArrowBack } from '../../styles/global'
import { Label, SwitchGroup, SelectField, SelectFieldContainer } from './styles'

import ArrowLeft from '../../assets/arrow-left.svg'

export default function App({ navigation }) {
    const [ordersActive, setOrdersActive] = useState(false)
    return (
        <Background>
            <PageTitle>Configurações</PageTitle>
            <Text>Notificações</Text>
            <SwitchGroup>
                <Label>Notificações de Pedidos</Label>
                <ToggleSwitch
                isOn={ordersActive}
                onColor="#08AF24"
                offColor="#D0D5DA"
                size="medium"
                onToggle={(isOn: boolean) => setOrdersActive(isOn)}
                />
            </SwitchGroup>
            <SwitchGroup>
                <Label>Notificações de Favores</Label>
                <ToggleSwitch
                isOn={ordersActive}
                onColor="#08AF24"
                offColor="#D0D5DA"
                size="medium"
                onToggle={(isOn: boolean) => setOrdersActive(isOn)}
                />
            </SwitchGroup>
            <SwitchGroup>
                <Label>Notificações de Cozinha</Label>
                <ToggleSwitch
                isOn={ordersActive}
                onColor="#08AF24"
                offColor="#D0D5DA"
                size="medium"
                onToggle={(isOn: boolean) => setOrdersActive(isOn)}
                />
            </SwitchGroup>
            <View>
                <Label>Selecione o toque de Pedidos</Label>
                <SelectFieldContainer>
                    <SelectField
                    mode="dropdown"
                    selectedValue={"default"}
                    onValueChange={(itemValue, itemIndex) => console.log('oi')}>
                        <Picker.Item label="Toque padrão" value="default" />
                        <Picker.Item label="Toque Um" value="1" />
                        <Picker.Item label="Toque Dois" value="2" />
                        <Picker.Item label="Toque Três" value="3" />
                        <Picker.Item label="Toque Quatro" value="4" />
                    </SelectField>
                </SelectFieldContainer>
            </View>
           <ArrowBack onPress={() => navigation.goBack()}><ArrowLeft /></ArrowBack>
            <StatusBar style="dark" />
        </Background>
    )
}
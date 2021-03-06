import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import ToggleSwitch from 'toggle-switch-react-native'

import { Background, PageTitle, ArrowBack } from '../../styles/global'
import { 
    Label, SwitchGroup, SelectField, 
    SelectFieldContainer, Group, Container } from './styles'

import ArrowLeft from '../../assets/arrow-left.svg'
import SettingsImage from '../../assets/settings.svg'
import { ScrollView } from 'react-native-gesture-handler';

export default function App({ navigation }) {
    const [ordersActive, setOrdersActive] = useState(false)
    return (
        <Container>
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
            <Group>
                <View>
                    <Label>Selecione o toque de Pedidos</Label>
                    <SelectFieldContainer>
                        <SelectField
                        mode="dropdown"
                        selectedValue={"default"}
                        onValueChange={(itemValue) => console.log('oi')}>
                            <Picker.Item label="Toque padrão" value="default" />
                            <Picker.Item label="Toque Um" value="1" />
                            <Picker.Item label="Toque Dois" value="2" />
                            <Picker.Item label="Toque Três" value="3" />
                            <Picker.Item label="Toque Quatro" value="4" />
                        </SelectField>
                    </SelectFieldContainer>
                </View>
                <View>
                    <Label>Selecione o toque de Favores</Label>
                    <SelectFieldContainer>
                        <SelectField
                        mode="dropdown"
                        selectedValue={"default"}
                        onValueChange={(itemValue) => console.log('oi')}>
                            <Picker.Item label="Toque padrão" value="default" />
                            <Picker.Item label="Toque Um" value="1" />
                            <Picker.Item label="Toque Dois" value="2" />
                            <Picker.Item label="Toque Três" value="3" />
                            <Picker.Item label="Toque Quatro" value="4" />
                        </SelectField>
                    </SelectFieldContainer>
                </View>
                <View>
                    <Label>Selecione o toque de Cozinha</Label>
                    <SelectFieldContainer>
                        <SelectField
                        mode="dropdown"
                        selectedValue={"default"}
                        onValueChange={(itemValue) => console.log('oi')}>
                            <Picker.Item label="Toque padrão" value="default" />
                            <Picker.Item label="Toque Um" value="1" />
                            <Picker.Item label="Toque Dois" value="2" />
                            <Picker.Item label="Toque Três" value="3" />
                            <Picker.Item label="Toque Quatro" value="4" />
                        </SelectField>
                    </SelectFieldContainer>
                </View>
            </Group>
            <SettingsImage />
           <ArrowBack onPress={() => navigation.goBack()}><ArrowLeft /></ArrowBack>
            <StatusBar style="dark" />
        </Background>
        </Container>
    )
}
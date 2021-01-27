import React from 'react'
import AddButton from '../../assets/add-button.svg'
import { AddContainer } from './styles'

export default function Add({ navigation, onPress }) {
    return (
        <AddContainer onPress={onPress}>
            <AddButton />
        </AddContainer>
    )
}
import React from 'react';
import { ModalContainer, ModalContent, ModalHeader, Close, Cover,ModalMain } from './styles';

import ArrowDown from '../../assets/arrow-down.svg'
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ModalInterface {
  children: any; 
  active: Boolean; 
  cover?: any;
  title?: String;
  button?: String;
  setActive: Function;
}

export const Modal = (props: ModalInterface) => {
  return (
  <ModalContainer show={props.active}>
    <ModalContent>
      <ModalHeader>
        <Close onPress={() => props.setActive(false)}>
          <ArrowDown />
        </Close>
        <Text>{props.title}</Text>
        <TouchableOpacity>{props.button}</TouchableOpacity>
      </ModalHeader>
      <Cover source={props.cover} />
      <ModalMain>
        {props.children}
      </ModalMain>
    </ModalContent>
  </ModalContainer>
)};

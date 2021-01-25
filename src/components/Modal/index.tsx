import React from 'react';
import { 
  ModalContainer, ModalContent, ModalHeader, 
  Close, Cover, ModalDetail, ModalInfo, ModalTag, 
  ModalFooter, ModalTitle, ModalFooterText, 
  ModalFooterButton } from './styles';

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
        <ModalTitle>{props.title}</ModalTitle>
        <Text></Text>
        <TouchableOpacity>{props.button}</TouchableOpacity>
      </ModalHeader>
      <Cover source={props.cover} />
      {props.children}
    </ModalContent>
  </ModalContainer>
)};

export {
  ModalDetail,
  ModalTitle,
  ModalInfo,
  ModalTag,
  ModalFooter,
  ModalFooterText,
  ModalFooterButton
}
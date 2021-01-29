import React from 'react';
import { Text, Animated, Modal as RNModal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { 
  ModalContainer, ModalContent, ModalHeader, 
  Close, Cover, ModalDetail, ModalInfo, ModalTag, 
  ModalFooter, ModalTitle, ModalFooterText, 
  ModalFooterButton } from './styles';

import ArrowDown from '../../assets/arrow-down.svg'

interface ModalInterface {
  children: any; 
  active: boolean; 
  cover?: any;
  title?: String;
  button?: String;
  setActive: Function;
}

export const Modal = (props: ModalInterface) => {
  return (
  <ModalContainer show={props.active}>
    <RNModal 
      animationType="slide"
      transparent={true}
      visible={props.active}>
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
    </RNModal>
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
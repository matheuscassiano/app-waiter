import React from 'react';
import { ModalContainer, ModalContent, ModalHeader, Close } from './styles';

import ArrowDown from '../../assets/arrow-down.svg'

interface ModalInterface {
  children: any; 
  active: Boolean; 
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
      </ModalHeader>
      {props.children}
    </ModalContent>
  </ModalContainer>
)};

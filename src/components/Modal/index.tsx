import React from 'react';
import { ModalContainer, ModalContent, ModalHeader, Close } from './styles';

import ArrowDown from '../../assets/arrow-down.svg'

interface ModalInterface {
  children: Element; 
  active: Boolean; 
  setActive: Function;
}

export const Modal = (props: ModalInterface) => {
  return (
  <ModalContainer>
    <ModalContent>
      <ModalHeader>
        <Close>
          <ArrowDown />
        </Close>
      </ModalHeader>
      {props.children}
    </ModalContent>
  </ModalContainer>
)};

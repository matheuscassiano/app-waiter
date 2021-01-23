import React from 'react';
import { ModalContainer, ModalContent, ModalHeader, Close } from './styles';

import ArrowDown from '../../assets/arrow-down.svg'

export function Modal({ children }){
  return (
  <ModalContainer>
    <ModalContent>
      <ModalHeader>
        <Close>
          <ArrowDown />
        </Close>
      </ModalHeader>
      {children}
    </ModalContent>
  </ModalContainer>
)};

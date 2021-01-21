import React from 'react';
import { ButtonContainer, InnerText } from './styles';

export default function Button({ children }) {
  return (
    <ButtonContainer>
        <InnerText>{children}</InnerText>
    </ButtonContainer>
  );
}
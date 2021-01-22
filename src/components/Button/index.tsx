import React from 'react';
import { ButtonContainer, InnerText } from './styles';

export const Button = ({ children, color }) => (
  <ButtonContainer color={color}>
      <InnerText>{children}</InnerText>
  </ButtonContainer>
);
import React from 'react';
import { ButtonContainer, InnerText } from './styles';

export const Button = ({ children, color, onPress }) => (
  <ButtonContainer onPress={onPress} color={color}>
      <InnerText>{children}</InnerText>
  </ButtonContainer>
);
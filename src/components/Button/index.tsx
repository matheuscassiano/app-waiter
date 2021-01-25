import React from 'react';
import { ButtonContainer, MidButtonContainer, InnerText } from './styles';

export const Button = ({ children, color, onPress }) => (
  <ButtonContainer onPress={onPress} color={color}>
      <InnerText>{children}</InnerText>
  </ButtonContainer>
);

export const MidButton = ({ children, color, onPress }) => (
  <MidButtonContainer onPress={onPress} color={color}>
      <InnerText>{children}</InnerText>
  </MidButtonContainer>
);
import React from 'react';
import { ButtonContainer, MidButtonContainer, InnerText } from './styles';

interface ButtonInterface {
  children: any;
  color: String;
  onPress?: Function;
}

export const Button = ({ children, color, onPress }: ButtonInterface ) => (
  <ButtonContainer onPress={onPress} color={color}>
      <InnerText>{children}</InnerText>
  </ButtonContainer>
);

export const MidButton = ({ children, color, onPress }: ButtonInterface ) => (
  <MidButtonContainer onPress={onPress} color={color}>
      <InnerText>{children}</InnerText>
  </MidButtonContainer>
);
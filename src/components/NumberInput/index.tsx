import React from 'react';
import { NumberContainer, Number, Button, ButtonText } from './styles';

interface NumberInterface {
  number: number;
  setNumber: Function;
}

export default function NumberInput({ number, setNumber }: NumberInterface ){
  return (
    <NumberContainer>
      <Button onPress={() => setNumber(number - 1)}>
        <ButtonText>-</ButtonText>
      </Button>
      <Number>{number}</Number>
      <Button onPress={() => setNumber(number + 1)}>
        <ButtonText>+</ButtonText>
      </Button>
    </NumberContainer>
  );
}
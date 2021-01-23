import React from 'react';
import { Item, Content, RoundedImage,ItemTitle } from './styles';

interface ItemCardInterface {
  onPress?: Function;
  children: any;
}

export function ItemCard(props: ItemCardInterface){
  return (
  <Item onPress={props.onPress}>{props.children}</Item>
)};

export { 
  Content,
  RoundedImage,
  ItemTitle
}
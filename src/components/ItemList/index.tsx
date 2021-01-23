import React from 'react';
import { Item, Content, RoundedImage,ItemTitle } from './styles';

export function ItemCard({ children }){
  return (
  <Item>{children}</Item>
)};

export { 
  Content,
  RoundedImage,
  ItemTitle
}
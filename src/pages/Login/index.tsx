import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { PageTitle } from '../../assets/styles/global';

export default function App() {
  return (
    <View>
      <PageTitle>Login</PageTitle>
      <StatusBar style="auto" />
    </View>
  );
}
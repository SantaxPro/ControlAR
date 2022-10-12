import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import { AuthProvider } from './src/context/authContext';
import { OperationsProvider } from './src/context/operationsContext';

export default function App() {
  return (
    <OperationsProvider>
    <AuthProvider>
      <Main />
    </AuthProvider>
    </OperationsProvider>
  );
}
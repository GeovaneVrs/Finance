import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from './styles';

interface TemplateProps {
  children?: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.greenBackground}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      
      <View style={styles.whiteCard}>
        {children}
      </View>
    </View>
  );
}

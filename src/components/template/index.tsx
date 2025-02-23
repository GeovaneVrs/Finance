import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styles } from './styles';

interface TemplateProps {
  children?: React.ReactNode;
  title?: string;
}

export default function Template({ children, title = "Welcome" }: TemplateProps) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.greenBackground}>
        <Text style={styles.welcomeText}>{title}</Text>
      </View>
      
      <View style={styles.whiteCard}>
        {children}
      </View>
    </View>
  );
}

// index.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>Reset password?</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text style={styles.label}>Enter email address</Text>
      <TextInput style={styles.input} placeholder="example@example.com" placeholderTextColor="rgba(9, 48, 48, 0.4)" />
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonTextPrimary}>Next step</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonTextSecondary}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or sign up with</Text>
      <View style={styles.socialIcons}>
        {/* Adicione os ícones aqui */}
      </View>
      <Text style={styles.footerText}>
        Don’t have an account? <Text style={styles.signUpText}>Sign Up</Text>
      </Text>
    </View>
  );
};

export default ForgotPasswordScreen;

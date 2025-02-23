import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Template from '@/components/template';
import { styles } from './styles';

export default function ForgotPassword() {
  return (
    <Template title="Forgot Password">
        <Text style={styles.resetTitle}>reset password?</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Text style={styles.inputLabel}>Enter email address</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="rgba(9, 48, 48, 0.4)"
        />

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next step</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            Don't have an account?{' '}
            <Text style={styles.bottomTextLink}>Sign Up</Text>
          </Text>
        </View>
    </Template>
  );
}
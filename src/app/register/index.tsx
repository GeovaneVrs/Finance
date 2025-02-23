import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, KeyboardTypeOptions } from 'react-native';
import { styles } from './styles';
import Template from '@/components/template';

type FormData = {
  fullName: string;
  email: string;
  mobileNumber: string;
  password: string;
};

export default function SignUpScreen() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
  });

  const handleChange = (name: keyof FormData, value: string) => {
    setForm({ ...form, [name]: value });
  };

  return (

    <Template title="Create Account">
      <StatusBar barStyle="light-content" />
      {[
        { name: 'fullName', label: 'Full Name', placeholder: 'John Doe' },
        { name: 'email', label: 'Email', placeholder: 'example@example.com', keyboardType: 'email-address' as KeyboardTypeOptions },
        { name: 'mobileNumber', label: 'Mobile Number', placeholder: '+123 456 789', keyboardType: 'phone-pad' as KeyboardTypeOptions },
        { name: 'password', label: 'Password', placeholder: '********', secureTextEntry: true },
      ].map((item, index) => (
        <View key={index} style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>{item.label}</Text>
          <TextInput
            style={styles.input}
            placeholder={item.placeholder}
            placeholderTextColor="rgba(14, 62, 62, 0.45)"
            keyboardType={item.keyboardType || 'default'}
            secureTextEntry={item.secureTextEntry || false}
            value={form[item.name as keyof FormData]}
            onChangeText={(text) => handleChange(item.name as keyof FormData, text)}
          />
        </View>
      ))}

      <Text style={styles.termsText}>
        By signing up, you agree to our{' '}
        <Text style={styles.termsTextBold}>Terms of Use</Text> and{' '}
        <Text style={styles.termsTextBold}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Already have an account? <Text style={styles.bottomTextLink}>Log In</Text>
      </Text>
    </Template>
  );
}


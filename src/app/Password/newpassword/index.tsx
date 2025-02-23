import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Template from '@/components/template';
import { styles } from './styles';

export default function NewPassword() {
  return (
    <Template title="New password">
      <View style={styles.container}>
    
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="●●●●●●●●"
            secureTextEntry
          />
          <Text style={styles.label}>New Password</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="●●●●●●●●"
            secureTextEntry
          />
          <Text style={styles.label}>Confirm New Password</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </Template>
  );
}

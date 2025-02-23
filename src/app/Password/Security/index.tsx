import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Template from '@/components/template';
import { styles } from './styles';

export default function Security() {
    const [pin, setPin] = useState(['', '', '', '', '', '']);
    const pinRefs = useRef<TextInput[]>([]);
  
    const handlePinChange = (text: string, index: number) => {
      let newPin = [...pin];
      newPin[index] = text;
      setPin(newPin);
  
      if (text && index < pin.length - 1) {
        pinRefs.current[index + 1]?.focus();
      } else if (text && index === pin.length - 1) {
        Keyboard.dismiss();
      }
    };
  
    const handleKeyPress = (e: { nativeEvent: { key: string } }, index: number) => {
      if (e.nativeEvent.key === 'Backspace' && index > 0 && !pin[index]) {
        pinRefs.current[index - 1]?.focus();
      }
    };
  
    const handleSubmit = () => {
      Keyboard.dismiss();
    };
  
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Template title="Security pin">
          <View style={styles.container}>
            <Text style={styles.resetTitle}>Enter Security Pin</Text>
            
            <View style={styles.pinContainer}>
              {pin.map((num, index) => (
                <TextInput
                  key={index}
                  ref={(el) => (pinRefs.current[index] = el!)}
                  style={styles.pinInput}
                  value={num}
                  onChangeText={(text) => handlePinChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="numeric"
                  maxLength={1}
                  returnKeyType="done"
                  onSubmitEditing={handleSubmit}
                />
              ))}
            </View>
  
            <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
              <Text style={styles.nextButtonText}>Accept</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Send Again</Text>
            </TouchableOpacity>
  
            <View style={styles.bottomTextContainer}>
              <Text style={styles.bottomText}>
                Don't have an account?{' '}
                <Text style={styles.bottomTextLink}>Sign Up</Text>
              </Text>
            </View>
          </View>
        </Template>
      </TouchableWithoutFeedback>
    );
  }
  
  
  
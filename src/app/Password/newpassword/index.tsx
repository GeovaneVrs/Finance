import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Easing } from 'react-native';
import { router } from 'expo-router';
import Template from '@/components/template';
import { styles } from './styles';
import Svg, { Path } from 'react-native-svg';

export default function NewPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const spinValue = new Animated.Value(0);

  const startLoading = () => {
    setIsLoading(true);
    
    // Start rotation animation
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    setTimeout(() => {
      router.push('/login');
    }, 3000);
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loadingWrapper}>
          <Animated.View style={[styles.loadingCircle, { transform: [{ rotate: spin }] }]}>
            <Svg width="152" height="152" viewBox="0 0 152 152">
              <Path
                d="M76 146.984C115.212 146.984 147 115.196 147 75.9841C147 36.7719 115.212 4.98413 76 4.98413C36.7878 4.98413 5 36.7719 5 75.9841C5 115.196 36.7878 146.984 76 146.984Z"
                stroke="#FFFFFF"
                strokeWidth="9.94"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <View style={[styles.loadingDot, {
              top: '50%',
              left: '10%',
              marginTop: -9,
            }]} />
          </Animated.View>
          <Text style={styles.successText}>
            Password Has been Changed successfully
          </Text>
        </View>
      </View>
    );
  }

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

        <TouchableOpacity style={styles.button} onPress={startLoading}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </Template>
  );
}
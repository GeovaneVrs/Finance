import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert, Platform } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'web') {
    Alert.alert('Notifications are not supported on web');
    return null;
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert('Failed to get push token for push notification!');
      return null;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    Alert.alert('Must use physical device for Push Notifications');
  }

  return token;
}

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [expoPushToken, setExpoPushToken] = useState('');

  React.useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      if (token) setExpoPushToken(token);
    });
  }, []);

  const generateCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const sendVerificationNotification = async (code: string) => {
    if (Platform.OS === 'web') {
      return;
    }

    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Código de Verificação",
          body: `Seu código de verificação é: ${code}`,
          data: { code },
        },
        trigger: null,
      });
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  const handleRegister = async () => {
    if (!name.trim()) {
      return Alert.alert("Erro", "Por favor, insira seu nome.");
    }
    if (!email.trim()) {
      return Alert.alert("Erro", "Por favor, insira seu e-mail.");
    }
    if (!password.trim()) {
      return Alert.alert("Erro", "Por favor, insira sua senha.");
    }
    
    const verificationCode = generateCode();
    
    await sendVerificationNotification(verificationCode);
    
    router.push({ 
      pathname: "/verification", 
      params: { 
        email, 
        verificationCode 
      } 
    });
  };

  return (
    <ImageBackground source={require("@/assets/background.jpg")} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={24} color="rgba(255, 255, 255, 0.7)" />
        </TouchableOpacity>

        <Text style={styles.title}>Crie sua conta</Text>

        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Sua senha"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
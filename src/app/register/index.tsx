import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name.trim()) {
      return Alert.alert("Erro", "Por favor, insira seu nome.");
    }
    if (!email.trim()) {
      return Alert.alert("Erro", "Por favor, insira seu e-mail.");
    }
    if (!password.trim()) {
      return Alert.alert("Erro", "Por favor, insira sua senha.");
    }
  
    Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
    router.navigate("/verification");
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

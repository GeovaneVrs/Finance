import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";
import { router, useFocusEffect } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Lógica de cadastro
  };

  return (
    <ImageBackground source={require("@/assets/background.jpg")} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={24}  color="rgba(255, 255, 255, 0.7)" />
        </TouchableOpacity>

        <Text style={styles.title}>Crie sua conta</Text>

        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Sua senha"
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

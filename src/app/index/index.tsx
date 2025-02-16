import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { styles } from "./styles";

export default function HomeScreen() {
  return (
    <ImageBackground source={require("@/assets/background.jpg")} style={styles.background}>
      <Text style={styles.title}>
        Suas{"\n"}Finanças{"\n"}
        <Text style={styles.highlight}>Sobre{"\n"}Controle</Text>
      </Text>

      <View style={styles.container}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </View>

    </ImageBackground>
  );
}


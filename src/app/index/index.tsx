import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";
import { router, useFocusEffect } from "expo-router"

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

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/register")}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

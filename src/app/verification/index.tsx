import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Verification() {
    const [code, setCode] = useState(["", "", "", ""]);

    const handleChange = (text: string, index: number) => {
        if (text.length > 1) return;
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    };


    const handleVerify = () => {
        if (code.some((digit) => digit === "")) {
            return alert("Preencha todos os campos do código!");
        }
        alert("Código validado!");
    };

    return (
        <ImageBackground source={require("@/assets/background.jpg")} style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="rgba(255, 255, 255, 0.7)" />
                </TouchableOpacity>

                <Text style={styles.title}>Verificação de segurança</Text>
                <Text style={styles.subtitle}>Enviamos um código de segurança para o e-mail:{"\n"}<Text style={styles.email}>geovanevalerio1807@gmail.com</Text></Text>

                <View style={styles.codeContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={styles.codeInput}
                            keyboardType="numeric"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => handleChange(text, index)}
                        />
                    ))}
                </View>

                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleVerify}>
                        <Text style={styles.buttonText}>Validar código</Text>
                    </TouchableOpacity>
                    <Text style={styles.timerText}>
                        Não recebeu? Aguarde <Text style={styles.timer}>01:36</Text>
                    </Text>
                </View>

            </View>
        </ImageBackground>
    );
}

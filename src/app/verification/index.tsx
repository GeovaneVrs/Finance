import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { styles } from "./styles";
import { router, useLocalSearchParams } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Verification() {
    const { email, verificationCode } = useLocalSearchParams();
    const [code, setCode] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(120);
    const inputRefs = useRef(new Array(4).fill(null));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleChange = (text: string, index: number) => {
        if (text.length > 1) return;
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
        if (!text && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
        if (index === 3 && text) {
            inputRefs.current[index]?.blur();
        }
    };

    const handleVerify = () => {
        if (code.some((digit) => digit === "")) {
            return Alert.alert("Erro", "Preencha todos os campos do código!");
        }
        if (code.join("") === verificationCode) {
            Alert.alert("Sucesso", "Código validado com sucesso!");
        } else {
            Alert.alert("Erro", "Código incorreto!");
        }
    };

    return (
        <ImageBackground source={require("@/assets/background.jpg")} style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="rgba(255, 255, 255, 0.7)" />
                </TouchableOpacity>

                <Text style={styles.title}>Verificação de segurança</Text>
                <Text style={styles.subtitle}>Enviamos um código de segurança para o e-mail: {"\n"}<Text style={styles.email}>{email}</Text></Text>

                <View style={styles.codeContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
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
                        Não recebeu? Aguarde <Text style={styles.timer}>{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}</Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
}
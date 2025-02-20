import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";
import { styles } from "./styles";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "expo-router";

const Index = () => {
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login"); 
  };

  const handleSignUp = () => {
    router.push("/register"); 
  };

  const handleForgotPassword = () => {
    toast({
      title: "Coming soon!",
      description: "Password recovery will be available soon.",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Svg width="119" height="125" viewBox="0 0 119 125" fill="none">
            <Path
              d="M56.4343 119.778V66.9994H77.6395V119.778M20.9294 119.778V94.173H42.1346V119.778M92.7948 119.778V41.7813H114V119.778M5 78.59L50.364 33.2259L65.8045 47.1386L106.911 6.05229M105.974 24.8334L107.868 7.68191C107.904 7.32097 107.858 6.95671 107.735 6.61554C107.612 6.27437 107.415 5.96483 107.158 5.70937C106.9 5.45391 106.589 5.25895 106.247 5.13858C105.905 5.01821 105.541 4.97546 105.18 5.01344L88.0485 6.90784"
              stroke="#00D09E"
              strokeWidth="8.6625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>

        <Text style={styles.title}>finWise</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Index;

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: "cover",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    backButton: {
      position: "absolute",
      top: 64,
      left: 20,
    },
    title: {
      fontSize: 24,
      color: "#FFF",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
      marginTop: -30, 
    },
    subtitle: {
      color: "rgba(255, 255, 255, 0.7)",
      textAlign: "center",
      marginBottom: 25, 
      fontSize: 14,
    },
    email: {
      color: "#FFF",
      fontWeight: "bold",
    },
    codeContainer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 15, 
      marginBottom: 50, 
    },
    codeInput: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.3)",
      textAlign: "center",
      fontSize: 24,
      color: "#FFF",
      borderRadius: 10,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    bottomContainer: {
      width: "100%",
      alignItems: "center",
      position: "absolute",
      bottom: 80,
    },
    button: {
      backgroundColor: "#6500FF",
      width: "85%",
      padding: 15,
      borderRadius: 25,
      alignItems: "center",
    },
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold",
    },
    timerText: {
      color: "rgba(255, 255, 255, 0.7)",
      textAlign: "center",
      marginTop: 15,
      fontSize: 14,
    },
    timer: {
      color: "#FFF",
      fontWeight: "bold",
    },
  });
  
  
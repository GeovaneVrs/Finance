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
    title: {
      fontSize: 64,
      color: "#FFF",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      textAlign: "left",
      lineHeight: 80,
      padding: 30,
      marginTop: 100,
      marginBottom: -30,
    },
    highlight: {
      color: "#6500FF",
    },
    button: {
      backgroundColor: "transparent",  
      width: "85%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 20,
      borderWidth: 2,  
      borderColor: "#8A2BE2",  
    },
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  
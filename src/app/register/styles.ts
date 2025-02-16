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
    fontSize: 32,
    color: "#6500FF",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    width: "85%",
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8A2BE2",
    marginBottom: 20,
    color: "#FFF",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#6500FF",
    width: "85%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 64,
    left: 20,
  },
});

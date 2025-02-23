import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00D09E',
    },
    greenBackground: {
      height: '25%',
      backgroundColor: '#00D09E',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 50,
    },
    whiteCard: {
      flex: 1,
      backgroundColor: '#F1FFF3',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingHorizontal: 35,
      paddingTop: 40,
    },
    welcomeText: {
      fontSize: 30,
      fontFamily: 'Poppins-SemiBold',
      color: '##093030',
      textAlign: 'center',
    },
  });
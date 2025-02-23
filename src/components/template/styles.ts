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
      paddingHorizontal: 37,
      paddingTop: 40,
    },
    welcomeText: {
      fontSize: 30,
      fontFamily: 'Poppins-SemiBold',
      color: '##093030',
      textAlign: 'center',
    },
    inputLabel: {
      fontSize: 15,
      fontFamily: 'Poppins-Medium',
      color: '#093030',
      marginBottom: 10,
    },
    inputContainer: {
      backgroundColor: '#DFF7E2',
      borderRadius: 18,
      height: 41,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      height: '100%',
      paddingHorizontal: 15,
      fontFamily: 'Poppins',
      fontSize: 16,
      color: '#093030',
    },
    eyeIcon: {
      padding: 10,
    },
    forgotPassword: {
      textAlign: 'center',
      color: '#093030',
      fontSize: 14,
      fontFamily: 'LeagueSpartan',
      fontWeight: '600',
      marginBottom: 20,
    },
    loginButton: {
      backgroundColor: '#00D09E',
      height: 45,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    loginButtonText: {
      color: '#093030',
      fontSize: 20,
      fontFamily: 'Poppins-SemiBold',
    },
    signUpButton: {
      backgroundColor: '#DFF7E2',
      height: 45,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    signUpButtonText: {
      color: '#0E3E3E',
      fontSize: 20,
      fontFamily: 'Poppins-SemiBold',
    },
    fingerprintSection: {
      alignItems: 'center',
      marginBottom: 20,
    },
    fingerprintText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      color: '#0E3E3E',
    },
    fingerprintBlue: {
      color: '#0068FF',
    },
    dividerContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    dividerText: {
      color: '#093030',
      fontSize: 13,
      fontFamily: 'LeagueSpartan',
    },
    socialButtons: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 15,
      marginBottom: 20,
    },
    socialButton: {
      padding: 10,
    },
    bottomText: {
      textAlign: 'center',
      color: '#093030',
      fontSize: 13,
      fontFamily: 'LeagueSpartan',
    },
    bottomTextLink: {
      color: '#3299FF',
    },
  });
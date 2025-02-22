import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00D09E',
    },
    greenBackground: {
      height: 220,
      backgroundColor: '#00D09E',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,
    },
    titleText: {
      fontSize: 28,
      fontFamily: 'Poppins-SemiBold',
      color: '#093030',
      textAlign: 'center',
    },
    fixedContainer: {
      flex: 1,
    },
    whiteCard: {
      flex: 1,
      backgroundColor: '#F1FFF3',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingHorizontal: 25,
      paddingTop: 0,
      justifyContent: 'center',
    },
    inputWrapper: {
      marginBottom: 12,
    },
    inputLabel: {
      fontSize: 14,
      fontFamily: 'Poppins-Medium',
      color: '#363130',
      marginBottom: 5,
    },
    input: {
      backgroundColor: '#DFF7E2',
      borderRadius: 12,
      height: 48,
      paddingHorizontal: 15,
      fontSize: 14,
      color: '#000',
    },
    termsText: {
      textAlign: 'center',
      color: '#4B4544',
      fontSize: 13,
      fontFamily: 'Poppins-Regular',
      marginVertical: 15,
    },
    termsTextBold: {
      fontWeight: 'bold',
    },
    signUpButton: {
      backgroundColor: '#00D09E',
      height: 48,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
      width: '80%',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    signUpButtonText: {
      color: '#fff',
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
    },
    bottomText: {
      textAlign: 'center',
      color: '#093030',
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
    },
    bottomTextLink: {
      color: '#3299FF',
      fontWeight: 'bold',
    },
  });
  
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
      },
      resetTitle: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '600',
        color: '#0e3e3e',
        marginBottom: 68,
        textAlign: 'center',
      },
      pinContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        marginBottom: 20,
      },
      pinInput: {
        width: 39,
        height: 39,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#00d09e',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
        color: '#0e3e3e',
        fontFamily: 'Poppins',
      },
      nextButton: {
        width: 169,
        height: 32,
        backgroundColor: '#00d09e',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
      },
      nextButtonText: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '600',
        color: '#093030',
        textAlign: 'center',
      },
      signUpButton: {
        width: 169,
        height: 32,
        backgroundColor: '#dff7e2',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
      },
      signUpButtonText: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '600',
        color: '#0e3e3e',
      },
      bottomTextContainer: {
        marginTop: 180,
        alignItems: 'center',
      },
      bottomText: {
        fontFamily: 'League Spartan',
        fontSize: 13,
        color: '#093030',
      },
      bottomTextLink: {
        color: '#3299ff',
      },
  });
  
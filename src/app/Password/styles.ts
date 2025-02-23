import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  resetTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    color: '#0e3e3e',
    marginBottom: 12,
  },  
  description: {
    fontFamily: 'League Spartan',
    fontSize: 14,
    lineHeight: 20,
    color: '#0e3e3e',
    marginBottom: 36,
    maxWidth: '100%',
  },
  inputLabel: {
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '500',
    color: '#093030',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#dff7e2',
    borderRadius: 18,
    height: 41,
    paddingHorizontal: 16,
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#093030',
    width: '100%', 
  },
  nextButton: {
    width: 169,
    height: 32,
    backgroundColor: '#00d09e',
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 44,
  },
  nextButtonText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    color: '#093030',
    textAlign: 'center',
  },
  divider: {
    marginTop: 32,
    alignItems: 'center',
  },
  dividerText: {
    fontFamily: 'League Spartan',
    fontSize: 13,
    color: '#093030',
  },

  signUpButton: {
    width: 169,
    height: 32,
    backgroundColor: '#dff7e2',
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 84,
  },
  signUpButtonText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    color: '#0e3e3e',
  },
  bottomTextContainer: {
    marginTop: 24,
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
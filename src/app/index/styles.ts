import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FFF3',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
  },
  logoContainer: {
    width: 128,
    height: 128,
    marginBottom: 16,
  },
  title: {
    color: '#00D09E',
    fontSize: 52,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  description: {
    color: '#4B4544',
    fontSize: 14,
    fontFamily: 'LeagueSpartan-Regular',
    textAlign: 'center',
    maxWidth: width * 0.8,
    marginTop: 8,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    marginTop: 24,
    gap: 16,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#00D09E',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: '#DFF7E2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#093030',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  signUpButtonText: {
    color: '#0E3E3E',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: '#093030',
    fontSize: 14,
    fontFamily: 'LeagueSpartan-SemiBold',
    marginTop: 16,
  },
});

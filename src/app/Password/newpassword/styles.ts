import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 40, 
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dff7e2',
    borderRadius: 18,
    paddingHorizontal: 10,
    fontSize: 16,
    opacity: 0.4,
    color: '#0e3e3e',
  },
  label: {
    position: 'absolute',
    top: -20,
    left: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#093030',
    fontFamily: 'Poppins',
  },
  button: {
    width: 300,
    height: 45,
    backgroundColor: '#00d09e',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#093030',
    fontFamily: 'Poppins',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#00d09e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingCircle: {
    width: 142,
    height: 142,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingDot: {
    width: 18,
    height: 18,
    backgroundColor: '#ffffff',
    borderRadius: 9,
    position: 'absolute',
  },
  successText: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 32,
    paddingHorizontal: 20,
  }
});
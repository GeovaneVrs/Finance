import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, SafeAreaView } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useFonts } from 'expo-font';

export default function ForgotPassword() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <View style={styles.headerSection}>
        <Text style={styles.title}>Forgot Password</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.resetText}>Reset Password?</Text>
          <Text style={styles.description} numberOfLines={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <Text style={styles.inputLabel}>Enter Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="example@example.com"
            placeholderTextColor="rgba(9, 48, 48, 0.5)"
          />

          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next Step</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or sign up with</Text>

          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <FacebookIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <GoogleIcon />
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const FacebookIcon = () => (
  <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <Path d="M29.3981 28.42C32.1719 25.4018 33.7108 21.4519 33.7103 17.3527C33.7103 15.2048 33.2872 13.0779 32.4651 11.0936C31.643 9.10928 30.438 7.30635 28.9189 5.7878C27.3999 4.26925 25.5966 3.06482 23.612 2.24332C21.6274 1.42182 19.5005 0.999334 17.3527 1C13.0157 1 8.8563 2.72286 5.78958 5.78958C2.72286 8.85631 1 13.0157 1 17.3527C1.00026 21.0809 2.27434 24.6971 4.61134 27.602C6.94833 30.5068 10.208 32.5259 13.8496 33.3246V22.5616H9.15848V17.6776H13.8546V13.4384C13.8546 12.1444 14.3688 10.9035 15.2837 9.98849C16.1987 9.07352 17.4395 8.5595 18.7334 8.5595H23.0488V13.4435H20.6576C20.1473 13.4435 19.658 13.6462 19.2971 14.007C18.9363 14.3679 18.7334 14.8573 18.7334 15.3676V17.6776H23.4144V22.5616H18.7334V33.6495C22.8181 33.3046 26.6244 31.4382 29.3981 28.42Z" stroke="#0E3E3E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const GoogleIcon = () => (
  <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <Path d="M25.4603 11.3366C24.4256 9.946 23.0502 8.84552 21.4665 8.14124C19.8827 7.43695 18.1442 7.15261 16.4186 7.31565C14.1156 7.53784 11.9581 8.54222 10.3055 10.1615C8.65292 11.7809 7.60491 13.9174 7.33597 16.2154C7.1743 17.6291 7.31314 19.0609 7.74351 20.4171C8.17387 21.7733 8.88607 23.0233 9.83326 24.085C10.7805 25.1468 11.9414 25.9964 13.2398 26.5782C14.5383 27.1599 15.9449 27.4607 17.3678 27.4608C19.9056 27.46 22.3503 26.5036 24.2149 24.782C26.0795 23.0604 27.2275 20.6998 27.4303 18.1701C27.4373 18.0676 27.423 17.9649 27.3887 17.8681C27.3544 17.7713 27.3007 17.6826 27.2308 17.6075C27.1609 17.5323 27.0762 17.4723 26.9822 17.4311C26.8881 17.3899 26.7866 17.3684 26.6839 17.3679H17.4694M33.7053 17.3527C33.7053 26.384 26.384 33.7053 17.3527 33.7053C8.32134 33.7053 1 26.384 1 17.3527C1 8.32134 8.32134 1 17.3527 1C26.384 1 33.7053 8.32134 33.7053 17.3527Z" stroke="#0E3E3E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d09e',
    width: '100%',
    borderRadius: 40,
    overflow: 'hidden',
  },
  headerSection: {
    height: 250, // Increased green section height
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#093030',
    textAlign: 'center',
  },
  mainContent: {
    flex: 1, // This makes the white section take up all remaining space
    backgroundColor: '#F1FFF3',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
  },
  contentContainer: {
    padding: 35,
    paddingTop: 40,
  },
  resetText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#0e3e3e',
  },
  description: {
    fontFamily: 'LeagueSpartan',
    fontSize: 14,
    color: '#0e3e3e',
    marginTop: 20,
    lineHeight: 20,
    width: '100%',
  },
  inputLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#093030',
    marginTop: 30,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#dff7e2',
    borderRadius: 18,
    height: 50,
    paddingHorizontal: 20,
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#093030',
  },
  nextButton: {
    backgroundColor: '#00d09e',
    borderRadius: 30,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: 169,
    alignSelf: 'center',
  },
  nextButtonText: {
    color: '#093030',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  signUpButton: {
    backgroundColor: '#dff7e2',
    borderRadius: 30,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: 169,
    alignSelf: 'center',
  },
  signUpButtonText: {
    color: '#0e3e3e',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  orText: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 13,
    color: '#093030',
    textAlign: 'center',
    marginTop: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  socialButton: {
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 13,
    color: '#093030',
  },
  footerLink: {
    fontFamily: 'LeagueSpartan-Light',
    fontSize: 13,
    color: '#3299ff',
  },
});
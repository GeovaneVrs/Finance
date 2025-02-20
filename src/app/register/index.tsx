import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Green Background with Title */}
      <View style={styles.greenBackground}>
        <Text style={styles.titleText}>Create Account</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* White Card */}
        <View style={styles.whiteCard}>
          {/** Form Inputs */}
          {[
            { label: 'Full name', placeholder: 'John Doe' },
            { label: 'Email', placeholder: 'example@example.com', keyboardType: 'email-address' as const },
            { label: 'Mobile Number', placeholder: '+123 456 789', keyboardType: 'phone-pad' as const },
            { label: 'Date of birth', placeholder: 'DD / MM / YYYY' },
            { label: 'Password', placeholder: 'Password', secureTextEntry: true },
            { label: 'Confirm Password', placeholder: 'Confirm Password', secureTextEntry: true }
          ].map((item, index) => (
            <View key={index}>
              <Text style={styles.inputLabel}>{item.label}</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder={item.placeholder}
                  placeholderTextColor="rgba(14, 62, 62, 0.45)"
                  keyboardType={item.keyboardType || 'default'}
                  secureTextEntry={item.secureTextEntry || false}
                />
                {item.secureTextEntry && (
                  <TouchableOpacity style={styles.eyeIcon}>
                    <Svg width="26" height="11" viewBox="0 0 26 11" fill="none">
                      <Path
                        d="M2.81442 1C8.31712 8.32781 17.113 8.55139 22.815 1.66714C22.9933 1.45438 23.1646 1.2308 23.3394 1M13.0752 6.66895V10M18.6303 5.20123L20.4447 8.42157M22.8115 1.66715L25.1364 3.83447M7.50955 5.20123L5.69512 8.42157M3.32484 1.66715L1 3.83447"
                        stroke="#0E3E3E"
                        strokeWidth="1.63636"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}

          {/* Terms and Conditions */}
          <Text style={styles.termsText}>
            By continuing, you agree to{' '}
            <Text style={styles.termsTextBold}>Terms of Use</Text> and{' '}
            <Text style={styles.termsTextBold}>Privacy Policy.</Text>
          </Text>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Bottom Text */}
          <Text style={styles.bottomText}>
            Already have an account? <Text style={styles.bottomTextLink}>Log In</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D09E',
  },
  greenBackground: {
    height: 150,
    backgroundColor: '#00D09E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
    color: '#093030',
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  whiteCard: {
    flexGrow: 1,
    backgroundColor: '#F1FFF3',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 25
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#363130',
    marginBottom: 5,
    marginTop: 10,
  },
  inputContainer: {
    backgroundColor: '#DFF7E2',
    borderRadius: 15,
    height: 40,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#093030',
  },
  eyeIcon: {
    padding: 8,
  },
  termsText: {
    textAlign: 'center',
    color: '#4B4544',
    fontSize: 13,
    fontFamily: 'LeagueSpartan',
    marginVertical: 10,
  },
  termsTextBold: {
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: '#00D09E',
    height: 42,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    width: 190,
    alignSelf: 'center',
  },
  signUpButtonText: {
    color: '#093030',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  bottomText: {
    textAlign: 'center',
    color: '#093030',
    fontSize: 12,
    fontFamily: 'LeagueSpartan',
  },
  bottomTextLink: {
    color: '#3299FF',
  },
});

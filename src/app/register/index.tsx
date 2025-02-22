import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, KeyboardTypeOptions } from 'react-native';

// Defina um tipo para o formulário
type FormData = {
  fullName: string;
  email: string;
  mobileNumber: string;
  password: string;
};

export default function SignUpScreen() {
  // Defina o estado com o tipo explicitado
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
  });

  const handleChange = (name: keyof FormData, value: string) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Green Background with Title */}
      <View style={styles.greenBackground}>
        <Text style={styles.titleText}>Create Account</Text>
      </View>

      {/* Fixed Content */}
      <View style={styles.fixedContainer}>
        {/* White Card */}
        <View style={styles.whiteCard}>
          {[ 
            { name: 'fullName', label: 'Full Name', placeholder: 'John Doe' },
            { name: 'email', label: 'Email', placeholder: 'example@example.com', keyboardType: 'email-address' as KeyboardTypeOptions },
            { name: 'mobileNumber', label: 'Mobile Number', placeholder: '+123 456 789', keyboardType: 'phone-pad' as KeyboardTypeOptions },            
            { name: 'password', label: 'Password', placeholder: '********', secureTextEntry: true },
          ].map((item, index) => (
            <View key={index} style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>{item.label}</Text>
              <TextInput
                style={styles.input}
                placeholder={item.placeholder}
                placeholderTextColor="rgba(14, 62, 62, 0.45)"
                keyboardType={item.keyboardType || 'default'}
                secureTextEntry={item.secureTextEntry || false}
                value={form[item.name as keyof FormData]}
                onChangeText={(text) => handleChange(item.name as keyof FormData, text)}
              />
            </View>
          ))}

          {/* Terms and Conditions */}
          <Text style={styles.termsText}>
            By signing up, you agree to our{' '}
            <Text style={styles.termsTextBold}>Terms of Use</Text> and{' '}
            <Text style={styles.termsTextBold}>Privacy Policy</Text>.
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

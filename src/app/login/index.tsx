import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Svg, Path } from 'react-native-svg';
import { styles } from './styles';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Green Background with Welcome Text */}
      <View style={styles.greenBackground}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      
      {/* White Card */}
      <View style={styles.whiteCard}>
        {/* Input Fields */}
        <Text style={styles.inputLabel}>Username or email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="example@example.com"
            placeholderTextColor="rgba(14, 62, 62, 0.45)"
          />
        </View>

        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="rgba(14, 62, 62, 0.45)"
          />
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
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <Text style={styles.dividerText}>or sign up with</Text>
        </View>

        {/* Social Buttons */}
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
              <Path
                d="M29.3981 28.42C32.1719 25.4018 33.7108 21.4519 33.7103 17.3527C33.7103 15.2048 33.2872 13.0779 32.4651 11.0936C31.643 9.10928 30.438 7.30635 28.9189 5.7878C27.3999 4.26925 25.5966 3.06482 23.612 2.24332C21.6274 1.42182 19.5005 0.999334 17.3527 1C13.0157 1 8.8563 2.72286 5.78958 5.78958C2.72286 8.85631 1 13.0157 1 17.3527C1.00026 21.0809 2.27434 24.6971 4.61134 27.602C6.94833 30.5068 10.208 32.5259 13.8496 33.3246V22.5616H9.15848V17.6776H13.8546V13.4384C13.8546 12.1444 14.3688 10.9035 15.2837 9.98849C16.1987 9.07352 17.4395 8.5595 18.7334 8.5595H23.0488V13.4435H20.6576C20.1473 13.4435 19.658 13.6462 19.2971 14.007C18.9363 14.3679 18.7334 14.8573 18.7334 15.3676V17.6776H23.4144V22.5616H18.7334V33.6495C22.8181 33.3046 26.6244 31.4382 29.3981 28.42Z"
                stroke="#0E3E3E"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Svg width="35" height="35" viewBox="0 0 35 35" fill="none">
              <Path
                d="M25.4603 11.3366C24.4256 9.946 23.0502 8.84552 21.4665 8.14124C19.8827 7.43695 18.1442 7.15261 16.4186 7.31565C14.1156 7.53784 11.9581 8.54222 10.3055 10.1615C8.65292 11.7809 7.60491 13.9174 7.33597 16.2154C7.1743 17.6291 7.31314 19.0609 7.74351 20.4171C8.17387 21.7733 8.88607 23.0233 9.83326 24.085C10.7805 25.1468 11.9414 25.9964 13.2398 26.5782C14.5383 27.1599 15.9449 27.4607 17.3678 27.4608C19.9056 27.46 22.3503 26.5036 24.2149 24.782C26.0795 23.0604 27.2275 20.6998 27.4303 18.1701C27.4373 18.0676 27.423 17.9649 27.3887 17.8681C27.3544 17.7713 27.3007 17.6826 27.2308 17.6075C27.1609 17.5323 27.0762 17.4723 26.9822 17.4311C26.8881 17.3899 26.7866 17.3684 26.6839 17.3679H17.4694M33.7053 17.3527C33.7053 26.384 26.384 33.7053 17.3527 33.7053C8.32134 33.7053 1 26.384 1 17.3527C1 8.32134 8.32134 1 17.3527 1C26.384 1 33.7053 8.32134 33.7053 17.3527Z"
                stroke="#0E3E3E"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>

        {/* Bottom Text */}
        <Text style={styles.bottomText}>
          Don't have an account? <Text style={styles.bottomTextLink}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
}


import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import Animated, { 
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import { styles } from './styles';

const { width } = Dimensions.get('window');

const OnboardingScreen = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  const FirstScreen = () => {
    const animatedStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        translateX.value,
        [0, width],
        [1, 0]
      );
      return { opacity };
    });

    return (
      <Animated.View style={[{ width }, animatedStyle]}>
        <View style={styles.container}>
          <View style={styles.curvedBackground}>
            <Svg width="429" height="624" viewBox="0 0 429 624" fill="none">
              <Path
                d="M0 70C0 31.3401 31.3401 0 70 0H360C398.66 0 430 31.3401 430 70V624H0V70Z"
                fill="#F1FFF3"
              />
            </Svg>
          </View>
          <View style={styles.circle} />
          <Image source={require('@/assets/moedas.png')} style={styles.image} />
          <Text style={styles.title}>Welcome to Expense Manager</Text>
        </View>
      </Animated.View>
    );
  };

  const SecondScreen = () => {
    const animatedStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        translateX.value,
        [0, width],
        [0, 1]
      );
      return { opacity };
    });

    return (
      <Animated.View style={[{ width }, animatedStyle]}>
        <View style={styles.container}>
          <View style={styles.curvedBackground}>
            <Svg width="429" height="624" viewBox="0 0 429 624" fill="none">
              <Path
                d="M0 70C0 31.3401 31.3401 0 70 0H360C398.66 0 430 31.3401 430 70V624H0V70Z"
                fill="#F1FFF3"
              />
            </Svg>
          </View>
          <View style={styles.circle} />
          <Image source={require('@/assets/moedas.png')} style={styles.image} />
          <Text style={styles.title}>¿Are you ready to take control of?</Text>
        </View>
      </Animated.View>
    );
  };

  const Pagination = () => {
    const animatedDotStyle = useAnimatedStyle(() => {
      const translateDot = interpolate(
        translateX.value,
        [0, width],
        [0, 29]
      );
      return {
        transform: [{ translateX: translateDot }],
      };
    });

    return (
      <View style={styles.pagination}>
        <Animated.View style={[styles.activeDot, animatedDotStyle]} />
        <View style={styles.inactiveDot} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <FirstScreen />
        <SecondScreen />
      </Animated.ScrollView>
      
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      
      <Pagination />
    </View>
  );
};

export default OnboardingScreen;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import BottomNavbar from '@/components/bar';

export default function FinanceDashboard() {
  return (
    <View style={styles.container}>
      {/* Fundo Verde (Parte Superior) */}
      <View style={styles.greenBackground} />

      {/* Fundo Branco com borda arredondada */}
      <View style={styles.whiteContainer}>
        {/* Retângulo Verde dentro do Branco */}
        <View style={styles.innerGreenBox} />
      </View>

      {/* Bottom Navbar fixa na parte inferior */}
      <BottomNavbar  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#00d09e', 
  },
  greenBackground: {
    width: '100%',
    height: '40%', 
    backgroundColor: '#00d09e',
    position: 'absolute',
    top: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  whiteContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: '#F1FFF3',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  innerGreenBox: {
    width: 317,
    height: 132,
    backgroundColor: '#00d09e',
    borderRadius: 31,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

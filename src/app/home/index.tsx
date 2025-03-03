import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import BottomNavbar from '@/components/bar';

export default function FinanceDashboard() {
  return (
    <View style={styles.container}>
      {/* Fundo Verde (Parte Superior) */}
      <View style={styles.greenBackground}>
        {/* Informações Financeiras */}
        <View style={styles.financeInfo}>
          {/* Welcome Message */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Hi, Welcome Back</Text>
            <Text style={styles.welcomeSubtitle}>Good Morning</Text>
          </View>
          
          <View style={styles.balanceContainer}>
            {/* Total Balance */}
            <View style={styles.balanceSection}>
              <View style={styles.labelContainer}>
                <View style={styles.icon}>
                  <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <Path d="M7.5 1C7.5 0.723857 7.27614 0.5 7 0.5L2.5 0.5C2.22386 0.5 2 0.723858 2 1C2 1.27614 2.22386 1.5 2.5 1.5L6.5 1.5L6.5 5.5C6.5 5.77614 6.72386 6 7 6C7.27614 6 7.5 5.77614 7.5 5.5L7.5 1ZM1.35355 7.35355L7.35355 1.35355L6.64645 0.646447L0.646447 6.64645L1.35355 7.35355Z" fill="#052224"/>
                  </Svg>
                </View>
                <Text style={styles.totalBalanceLabel}>Total Balance</Text>
              </View>
              <Text style={styles.totalBalanceValue}>$7,783.00</Text>
            </View>

            <View style={styles.divider} />

            {/* Total Expense */}
            <View style={styles.balanceSection}>
              <View style={styles.labelContainer}>
                <View style={styles.icon}>
                  <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <Path d="M7 7.5C7.27614 7.5 7.5 7.27614 7.5 7L7.5 2.5C7.5 2.22386 7.27614 2 7 2C6.72386 2 6.5 2.22386 6.5 2.5L6.5 6.5L2.5 6.5C2.22386 6.5 2 6.72386 2 7C2 7.27614 2.22386 7.5 2.5 7.5L7 7.5ZM0.646447 1.35355L6.64645 7.35355L7.35355 6.64645L1.35355 0.646447L0.646447 1.35355Z" fill="#052224"/>
                  </Svg>
                </View>
                <Text style={styles.totalExpenseLabel}>Total Expense</Text>
              </View>
              <Text style={styles.totalExpenseValue}>-$1,187.40</Text>
            </View>
          </View>

          {/* Retângulo abaixo das informações financeiras */}
          <View style={styles.bottomBoxContainer}>
            {/* Parte preta de fundo */}
            <View style={styles.blackBackground}>
              <Text style={styles.percentageText}>30%</Text>
            </View>
            {/* Parte branca sobreposta */}
            <View style={styles.whiteOverlay}>
              <Text style={styles.amountText}>$20,000.00</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Fundo Branco com borda arredondada */}
      <View style={styles.whiteContainer}>
        {/* Retângulo Verde dentro do Branco */}
        <View style={styles.innerGreenBox} />
      </View>

      {/* Bottom Navbar fixa na parte inferior */}
      <BottomNavbar />
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60, 
  },
  financeInfo: {
    alignItems: 'flex-start', 
    width: '100%',
    paddingHorizontal: 30, 
  },
  welcomeContainer: {
    width: 278,
    height: 35,
    marginBottom: 25, 
    alignItems: 'flex-start',
  },
  welcomeTitle: {
    color: '#052224',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textTransform: 'capitalize',
    lineHeight: 24,
  },
  welcomeSubtitle: {
    color: '#052224',
    fontSize: 14,
    fontFamily: 'League Spartan',
    width: 169,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7, 
    alignSelf: 'center', 
    marginTop: 15, 
  },
  balanceSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalBalanceLabel: {
    color: '#093030',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
    marginLeft: 5,
  },
  totalBalanceValue: {
    color: '#F1FFF3',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  divider: {
    width: 1, 
    height: 40, 
    backgroundColor: '#DFF7E2',
    marginHorizontal: 15,
  },
  totalExpenseLabel: {
    color: '#093030',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
    marginLeft: 5, 
  },
  totalExpenseValue: {
    color: '#0068FF',
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    textTransform: 'capitalize',
  },
  icon: {
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBoxContainer: {
    width: 330,
    height: 27,
    marginTop: 15, 
    alignSelf: 'center', 
  },
  blackBackground: {
    position: 'absolute',
    width: '100%',
    height: 27,
    backgroundColor: '#052224',
    borderRadius: 13.5,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  whiteOverlay: {
    position: 'absolute',
    width: '80%',
    height: 27,
    backgroundColor: '#f1fff3',
    borderRadius: 13.5,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end', 
    paddingRight: 15, 
  },
  percentageText: {
    color: '#f1fff3',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
  },
  amountText: {
    color: '#052224',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    textTransform: 'capitalize',
    fontStyle: 'italic', 
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
});
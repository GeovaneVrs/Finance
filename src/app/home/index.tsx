import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavbar from '@/components/bar';

export default function FinanceDashboard() {
  return (
    <View style={styles.container}>
      {/* Fundo Verde (Parte Superior) */}
      <View style={styles.greenBackground}>
        {/* Informações Financeiras */}
        <View style={styles.financeInfo}>
          <View style={styles.balanceContainer}>
            <View style={styles.balanceSection}>
              <Text style={styles.totalBalanceLabel}>Total Balance</Text>
              <Text style={styles.totalBalanceValue}>$7,783.00</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.balanceSection}>
              <Text style={styles.totalExpenseLabel}>Total Expense</Text>
              <Text style={styles.totalExpenseValue}>-$1,187.40</Text>
            </View>
          </View>

          {/* Retângulo abaixo das informações financeiras */}
          <View style={styles.bottomBox} />
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
    justifyContent: 'center',
  },
  financeInfo: {
    alignItems: 'center',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Adiciona um espaço antes do retângulo
  },
  balanceSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  totalBalanceLabel: {
    color: '#093030',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
  },
  totalBalanceValue: {
    color: '#F1FFF3',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  divider: {
    width: 1, // Deixa a linha em pé
    height: 40, // Ajuste para a altura desejada
    backgroundColor: '#DFF7E2',
    marginHorizontal: 15,
  },
  totalExpenseLabel: {
    color: '#093030',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
  },
  totalExpenseValue: {
    color: '#0068FF',
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    textTransform: 'capitalize',
  },
  bottomBox: {
    width: 330,
    height: 27,
    backgroundColor: '#052224',
    borderRadius: 13.5,
    marginTop: 10, 
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


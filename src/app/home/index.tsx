import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import BottomNavbar from "@/components/bar";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { TransactionList } from "@/components/history";

const sampleTransactions = [
  {
    type: 'Salary',
    amount: '$4.000,00',
    category: 'Monthly',
    date: '18:27 - April 30',
    iconBackgroundColor: '#6DB6FE',
    isNegative: false
  },
  {
    type: 'Groceries',
    amount: '$100,00',
    category: 'Monthly',
    date: '17:00 - April 24',
    iconBackgroundColor: '#3299FF',
    isNegative: true
  },
  {
    type: 'Rent',
    amount: '$674,40',
    category: 'Monthly',
    date: '8:30 - April 15',
    iconBackgroundColor: '#0068FF',
    isNegative: true
  }
];

export default function FinanceDashboard() {
  const [activeButton, setActiveButton] = useState('day');

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

            <View style={styles.notificação}>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <Circle cx="15" cy="15" r="15" fill="#DFF7E2" />

                <Path
                  d="M15 6C12.2386 6 10 8.23858 10 11V16L8.5 17.5V18H21.5V17.5L20 16V11C20 8.23858 17.7614 6 15 6Z"
                  fill="#093030"
                />
                <Path
                  d="M12 19C12 20.1046 12.8954 21 14 21H16C17.1046 21 18 20.1046 18 19H12Z"
                  fill="#093030"
                />
              </Svg>
            </View>
          </View>

          <View style={styles.balanceContainer}>
            {/* Total Balance */}
            <View style={styles.balanceSection}>
              <View style={styles.labelContainer}>
                <View style={styles.icon}>
                  <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <Path
                      d="M7.5 1C7.5 0.723857 7.27614 0.5 7 0.5L2.5 0.5C2.22386 0.5 2 0.723858 2 1C2 1.27614 2.22386 1.5 2.5 1.5L6.5 1.5L6.5 5.5C6.5 5.77614 6.72386 6 7 6C7.27614 6 7.5 5.77614 7.5 5.5L7.5 1ZM1.35355 7.35355L7.35355 1.35355L6.64645 0.646447L0.646447 6.64645L1.35355 7.35355Z"
                      fill="#052224"
                    />
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
                    <Path
                      d="M7 7.5C7.27614 7.5 7.5 7.27614 7.5 7L7.5 2.5C7.5 2.22386 7.27614 2 7 2C6.72386 2 6.5 2.22386 6.5 2.5L6.5 6.5L2.5 6.5C2.22386 6.5 2 6.72386 2 7C2 7.27614 2.22386 7.5 2.5 7.5L7 7.5ZM0.646447 1.35355L6.64645 7.35355L7.35355 6.64645L1.35355 0.646447L0.646447 1.35355Z"
                      fill="#052224"
                    />
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
        <View style={styles.innerGreenBox}>
          <View style={styles.circle}>
            <TouchableOpacity style={styles.circleicon}>
              <MaterialIcons name="card-travel" size={40} color="#052224" />
            </TouchableOpacity>
          </View>

          <View style={styles.divider2} />
          <View style={styles.divider3} />

          <TouchableOpacity style={styles.salary}>
            <MaterialIcons name="attach-money" size={32} color="#052224" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.food}>
            <MaterialIcons name="fastfood" size={32} color="#052224" />
          </TouchableOpacity>

          <Text style={styles.amountsalaryText}>$4.000.00</Text>
          <Text style={styles.amountfoodText}>-$100.00</Text>
        </View>

        <View style={styles.data}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                activeButton === 'day' && styles.activeButton
              ]}
              onPress={() => setActiveButton('day')}
            >
              <Text style={[
                styles.buttonText,
                activeButton === 'day' && styles.activeButtonText
              ]}>Day</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                activeButton === 'week' && styles.activeButton
              ]}
              onPress={() => setActiveButton('week')}
            >
              <Text style={[
                styles.buttonText,
                activeButton === 'week' && styles.activeButtonText
              ]}>Week</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                activeButton === 'month' && styles.activeButton
              ]}
              onPress={() => setActiveButton('month')}
            >
              <Text style={[
                styles.buttonText,
                activeButton === 'month' && styles.activeButtonText
              ]}>Month</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TransactionList
          transactions={sampleTransactions}
          containerStyle={{ marginTop: 90 }}
          rowStyle={{ paddingHorizontal: 32 }}
          spacing={10}
          iconSize={48}
          dividerHeight={25}
        />

      </View>

      {/* Bottom Navbar fixa na parte inferior */}
      <BottomNavbar />
    </View>
  );
}

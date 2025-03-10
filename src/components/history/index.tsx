import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

interface Transaction {
    type: string;
    amount: string;
    category: string;
    date: string;
    iconBackgroundColor: string;
    isNegative?: boolean;
  }
  
  interface TransactionListProps {
    transactions: Transaction[];
    containerStyle?: any;
    rowStyle?: any;
    iconSize?: number;
    spacing?: number;
    dividerHeight?: number;
  }
  
  export const TransactionList: React.FC<TransactionListProps> = ({
    transactions,
    containerStyle,
    rowStyle,
    iconSize = 54,
    spacing = 10,
    dividerHeight = 20
  }) => {
    return (
      <ScrollView 
        style={[styles.container, containerStyle]} 
        showsVerticalScrollIndicator={false}
      >
        {transactions.map((transaction, index) => (
          <View 
            key={index} 
            style={[
              styles.transactionRow,
              { marginVertical: spacing },
              rowStyle
            ]}
          >
            <View 
              style={[
                styles.iconContainer, 
                { 
                  backgroundColor: transaction.iconBackgroundColor,
                  width: iconSize,
                  height: iconSize,
                }
              ]}
            >
                         
            </View>
            
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionType}>{transaction.type}</Text>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            
            <View style={[styles.dividerLine, { height: dividerHeight }]} />
            
            <Text style={styles.categoryText}>{transaction.category}</Text>
            
            <View style={[styles.dividerLine, { height: dividerHeight }]} />
            
            <Text style={[
              styles.amount,
              transaction.isNegative ? styles.negativeAmount : styles.positiveAmount
            ]}>
              {transaction.isNegative ? '-' : ''}{transaction.amount}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  };
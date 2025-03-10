import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    height: 53,
  },
  iconContainer: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionDetails: {
    marginLeft: 16,
    flex: 1,
  },
  transactionType: {
    color: '#052224',
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  transactionDate: {
    color: '#0068FF',
    fontSize: 8,
    fontWeight: '600',
    marginTop: 4,
  },
  dividerLine: {
    width: 1,
    backgroundColor: '#00D09E',
    marginHorizontal: 16,
  },
  categoryText: {
    color: '#052224',
    fontSize: 13,
    fontWeight: '300',
  },
  amount: {
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
    minWidth: 80,
    textAlign: 'right',
  },
  positiveAmount: {
    color: '#052224',
  },
  negativeAmount: {
    color: '#0068FF',
  },
});
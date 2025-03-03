import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    divider2: {
        width: 2, 
        height: 80, 
        backgroundColor: '#DFF7E2',
        position: "absolute",
        left: 130, 
    },
    divider3: {
        width: 110, 
        height: 2, 
        backgroundColor: '#DFF7E2',
        position: "absolute",
        left: 160, 
    },
    salary: {
        position: "absolute",
        left: 165, 
        top: 25,
    },
    food: {
        position: "absolute",
        left: 165, 
        top: 75,
    },
    amountsalaryText:{
        color: '#052224',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        lineHeight: 24,
        position: "absolute",
        left: 198, 
        top: 28,
    },
    amountfoodText:{
        color: '#0068ff',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        lineHeight: 24,
        position: "absolute",
        left: 205, 
        top: 80,
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
        backgroundColor: "#00d09e",
        borderRadius: 31,
        alignItems: "center",
        justifyContent: "center",
      },
    circle: {
        width: 68.34,
        height: 68.34,
        borderRadius: 68.34 / 2,
        borderWidth: 2,
        borderLeftColor: "blue", 
        borderRightColor: "#f1fff2", 
        borderTopColor: "blue", 
        borderBottomColor: "#f1fff2", 
        transform: [{ rotate: "-87.73deg" }],
        position: "absolute",
        left: 36, 
        top: 33, 
        alignItems: "center",
        justifyContent: "center",
    },
    circleicon: {
        transform: [{ rotate: "88deg" }],
    },
    notificação: {
      position: "absolute",
      right: -60, 
      top: 6, 
    }
  });
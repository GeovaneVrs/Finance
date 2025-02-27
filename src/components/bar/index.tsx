import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function BottomNavbar() {
  return (
    <View style={styles.container}>
      {/* Ícone Home */}
      <TouchableOpacity style={styles.iconContainer}>
        <View style={styles.activeIconBackground} />
        <Svg width="27" height="33" viewBox="0 0 27 33" fill="none">
          <Path
            d="M24.7678 32H2.23222C1.90542 32 1.592 31.8686 1.36091 31.6348C1.12983 31.4009 1.00001 31.0837 1.00001 30.753V12.731C0.999297 12.5589 1.0344 12.3886 1.10303 12.2312C1.17166 12.0738 1.27229 11.9327 1.39835 11.8173L12.6635 1.33085C12.8903 1.11816 13.1881 1 13.4974 1C13.8066 1 14.1044 1.11816 14.3312 1.33085L25.6017 11.8173C25.7267 11.9336 25.8266 12.0748 25.8952 12.232C25.9637 12.3893 25.9994 12.5591 26 12.731V30.753C26 31.0837 25.8702 31.4009 25.6391 31.6348C25.408 31.8686 25.0946 32 24.7678 32ZM10.6027 23.1798H16.4026C16.5226 23.1805 16.6412 23.2051 16.7518 23.2522C16.8624 23.2993 16.9627 23.368 17.047 23.4544C17.1313 23.5407 17.198 23.643 17.2433 23.7555C17.2886 23.8679 17.3115 23.9882 17.3108 24.1097V32H9.68919V24.1097C9.68849 23.9878 9.7116 23.867 9.7572 23.7542C9.8028 23.6414 9.86998 23.5389 9.95488 23.4525C10.0398 23.3661 10.1407 23.2975 10.2519 23.2507C10.3631 23.2039 10.4823 23.1798 10.6027 23.1798Z"
            stroke="#052224"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>

      {/* Ícone Gráficos */}
      <TouchableOpacity>
        <Svg width="33" height="33" viewBox="0 0 33 33" fill="none">
          <Path
            d="M25.7654 25.4665L32 31.5M7.45112 9.79609V21.2765M11.4073 21.2765V15.9605M19.5415 21.2765V18.6212M15.3635 21.2765V9.79609M23.5627 21.2765V14.1851M30.0084 15.5363C30.0084 23.2884 23.5146 29.5726 15.5042 29.5726C7.49375 29.5726 1 23.2884 1 15.5363C1 7.78427 7.49375 1.5 15.5042 1.5C23.5146 1.5 30.0084 7.78427 30.0084 15.5363Z"
            stroke="#052224"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>

      {/* Ícone Transações */}
      <TouchableOpacity>
        <Svg width="35" height="27" viewBox="0 0 35 27" fill="none">
          <Path
            d="M14.7793 13.5056H24.0604V18.5395L34 9.76975L24.0604 1V6.03386H14.7793M20.2207 13.4944H10.9396V8.4605L1 17.2302L10.9396 26V20.9661H20.2207"
            stroke="#052224"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>

      {/* Ícone Mensagens */}
      <TouchableOpacity>
        <Svg width="29" height="25" viewBox="0 0 29 25" fill="none">
          <Path
            d="M1.00002 17.4738L14.5 24L28 17.4738M1 12.3985L14.0642 18.7095C14.1961 18.7723 14.3413 18.8049 14.4885 18.8049C14.6357 18.8049 14.7809 18.7723 14.9129 18.7095L27.9885 12.3875M1.75131 7.8252L14.2476 13.8935C14.3262 13.9305 14.4125 13.9498 14.5 13.9498C14.5875 13.9498 14.6738 13.9305 14.7523 13.8935L27.2545 7.8252C27.3244 7.79109 27.3831 7.73901 27.4242 7.67474C27.4652 7.61047 27.4869 7.53652 27.4869 7.4611C27.4869 7.38567 27.4652 7.31173 27.4242 7.24746C27.3831 7.18319 27.3244 7.13111 27.2545 7.097L14.7523 1.05627C14.6738 1.01925 14.5875 1 14.5 1C14.4125 1 14.3262 1.01925 14.2476 1.05627L1.75131 7.12458C1.68835 7.16082 1.63621 7.21214 1.60002 7.27354C1.56384 7.33494 1.54479 7.40431 1.54479 7.47489C1.54479 7.54547 1.56384 7.61484 1.60002 7.67624C1.63621 7.73763 1.68835 7.78896 1.75131 7.8252Z"
            stroke="#052224"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>

      <TouchableOpacity>
        <Svg width="24" height="29" viewBox="0 0 24 29" fill="none">
          <Path
            d="M1.76856 19.3287C1.23053 20.6656 0.970146 22.0944 1.00272 23.5313C1.00272 29.4896 22.9864 29.4896 22.9973 23.5313C23.0299 22.0944 22.7695 20.6656 22.2315 19.3287C21.6935 17.9919 20.8886 16.7739 19.8642 15.7464C18.8397 14.7188 17.6164 13.9024 16.2659 13.345C14.9155 12.7876 13.4651 12.5005 12 12.5005C10.5349 12.5005 9.08451 12.7876 7.73405 13.345C6.38359 13.9024 5.16026 14.7188 4.13584 15.7464C3.11142 16.7739 2.30659 17.9919 1.76856 19.3287Z"
            stroke="#052224"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M11.9919 9.66262C14.4303 9.66262 16.4071 7.72342 16.4071 5.33131C16.4071 2.93919 14.4303 1 11.9919 1C9.55339 1 7.57663 2.93919 7.57663 5.33131C7.57663 7.72342 9.55339 9.66262 11.9919 9.66262Z"
            stroke="#052224"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 108,
    backgroundColor: "#dff7e2",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconContainer: {
    alignItems: "center",
  },
  activeIconBackground: {
    width: 57,
    height: 53,
    backgroundColor: "#00d09e",
    borderRadius: 22,
    position: "absolute",
    top: -10,
  },
});

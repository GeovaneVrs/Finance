import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00D09E",
    alignItems: "center",
    justifyContent: "center",
  },
  curvedBackground: {
    position: "absolute",
    top: height * 0.33,
    width: width,
    alignItems: "center",
  },
  circle: {
    width: 248,
    height: 248,
    backgroundColor: "#DFF7E2",
    borderRadius: 9999,
    position: "absolute",
    top: height * 0.48,
    alignSelf: "center",
  },
  image: {
    width: 287,
    height: 287,
    position: "absolute",
    top: height * 0.43,
    alignSelf: "center",
  },
  title: {
    textAlign: "center",
    color: "#0E3E3E",
    fontSize: 30,
    fontFamily: "Poppins-SemiBold",
    textTransform: "capitalize",
    lineHeight: 39,
    maxWidth: 289,
    position: "absolute",
    top: height * 0.13,
    alignSelf: "center",
  },
  nextButton: {
    position: "absolute",
    top: height * 0.81,
    alignSelf: "center",
  },
  nextButtonText: {
    textAlign: "center",
    color: "#0E3E3E",
    fontSize: 30,
    fontFamily: "Poppins-SemiBold",
    textTransform: "capitalize",
  },
  pagination: {
    position: "absolute",
    top: height * 0.86,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    alignSelf: "center",
    width: 42,
    height: 13,
  },
  activeDot: {
    width: 13,
    height: 13,
    backgroundColor: "#00D09E",
    borderRadius: 9999,
    position: "absolute",
  },
  inactiveDot: {
    width: 13,
    height: 13,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#0E3E3E",
  },
});
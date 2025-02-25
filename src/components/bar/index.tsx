import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function BottomNavbar(){
    return (
        <View style={styles.container}>
        
        </View>
    );
};

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
    }
});


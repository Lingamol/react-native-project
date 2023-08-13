import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
export default function CircleLoader() {
  return (
    <View style={styles.loaderContainer}>
      <Text style={styles.loaderText}>Loader</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: { display: 1, alignItems: "center" },
  loaderText: { fontFamily: "Montserrat-Bold", fontSize: 30 },
});

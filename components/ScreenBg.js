import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import image from "../assets/img/bg/main-bg2x.jpg";

const ScreenBg = ({ children }) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {children}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default ScreenBg;

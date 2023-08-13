import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { colors, radius } from "../../../utils/variables";
export default function ButtonMain(props) {
  const { onPress, title = "", style } = props;
  return (
    <Pressable
      style={[styles.button, style]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: radius.mainBtn,
    elevation: 3,
    backgroundColor: colors.accentColor,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: colors.textColorWhite,
    // lineHeight: 100,
  },
});

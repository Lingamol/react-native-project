import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { colors, radius } from "../../utils/variables";
export default function AddCommentBtn({ children, ...props }) {
  const {
    onPress,
    title = "",
    style,
    disabled = false,
    btnRadius = radius.mainBtn,
  } = props;
  return (
    <Pressable
      style={[
        styles.button,
        style,
        disabled && styles.disabled,
        { borderRadius: btnRadius },
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {title && (
        <Text style={[styles.text, disabled && styles.textDisabled]}>
          {title}
        </Text>
      )}
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 16,
    // paddingHorizontal: 32,
    // borderRadius: radius.mainBtn,
    width: 34,
    height: 34,
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
  disabled: {
    backgroundColor: colors.inputBgColor,
  },
  textDisabled: { color: colors.placeHolderColor },
});

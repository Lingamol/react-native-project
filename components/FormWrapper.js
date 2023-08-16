import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { colors, fonts } from "../utils/variables";

import useKeyboard from "../Hooks/UseKeybord";

export default function FormContainer({ children, ...props }) {
  const { type, title } = props;
  isKeyboardShowed = useKeyboard();

  registrationAndKeybord =
    isKeyboardShowed && type === "registration" ? true : false;
  loginAndKeybord = isKeyboardShowed && type !== "registration" ? true : false;
  return (
    <View
      style={[
        styles.container,
        type === "registration"
          ? isKeyboardShowed
            ? styles.keyboardReg
            : styles.registration
          : isKeyboardShowed
          ? styles.keyboardLog
          : styles.login,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      {/* {type === "registration" && <AvatarInput />} */}
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // borderWidth: 2,
    position: "relative",

    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.mainBgColor,
  },

  title: {
    fontFamily: fonts.mainRegularFont,
    color: colors.mainTextColor,
    textAlign: "center",
    fontSize: 30,
    marginBottom: 32,
  },
  login: { maxHeight: 456, paddingTop: 32, paddingBottom: 111 },
  registration: {
    maxHeight: 516,
    paddingTop: 92,
    paddingBottom: 45,
  },
  keyboardReg: { maxHeight: 374, paddingBottom: 32, paddingTop: 92 },
  keyboardLog: { maxHeight: 248, paddingBottom: 32, paddingTop: 32 },
});

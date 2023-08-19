import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { colors, fonts } from "../../../utils/variables";
import AvatarInput from "../../Form/AvatarInput/AvatarInput";
import useKeyboard from "../../../Hooks/UseKeybord";

export default function FormContainer({ children, ...props }) {
  const { type, title, imgUrl } = props;
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
      {type === "registration" && (
        <View style={styles.avatarPosition}>
          <AvatarInput imgUrl={imgUrl} />
        </View>
      )}
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    // borderWidth: 2,
    position: "relative",

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.mainBgColor,
  },
  avatarPosition: {
    position: "absolute", // position: "absolute",
    top: -60,
    left: "50%",
    // transform: [{ translateX: -50 }, { translateY: -50 }],
    transform: [{ translateX: -50 }],
  },
  title: {
    fontFamily: fonts.mainRegularFont,
    color: colors.mainTextColor,
    textAlign: "center",
    fontSize: 30,
    marginBottom: 32,
  },
  login: { maxHeight: 490, paddingTop: 32, paddingBottom: 111 },
  registration: {
    maxHeight: 550,
    paddingTop: 92,
    paddingBottom: 45,
  },
  keyboardReg: { maxHeight: 374, paddingBottom: 32, paddingTop: 92 },
  keyboardLog: { maxHeight: 248, paddingBottom: 32, paddingTop: 32 },
});

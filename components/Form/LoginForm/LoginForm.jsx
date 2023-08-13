import React, { useState } from "react";
import { colors, radius } from "../../../utils/variables";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
const initialState = {
  login: "",
  email: "",
  password: "",
};

const initialStateHighlighted = {
  login: "false",
  email: "false",
  password: "false",
};
export default function LoginForm() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [formState, setFormState] = useState(initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHighlighted, setIsHighlighted] = useState(initialStateHighlighted);
  const onLogin = () => {
    Alert.alert("Credentials", `${name} +${e}+ ${password}`);
  };
  const onRegister = () => {
    keyboardHide();
    Alert.alert(
      "Credentials",
      `${formState.login}, ${formState.email}, ${formState.password}`
    );
    setFormState(initialState);
  };

  const onShowToggle = () => {
    setSecurityEntry((prevState) => {
      if (!prevState.isShow) {
        return initialStateSecureEntry;
      }
      return {
        isShow: false,
        title: "скрыть",
      };
    });
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onInputFocus = () => {
    setIsShowKeyboard(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          {/* <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Username"
            style={styles.input}
            selectionColor="#FF6C00"
            placeholderTextColor="#BDBDBD"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            style={[
              styles.passwordInput,
              isHighlighted.password === "true" && styles.highlighted,
            ]}
            selectionColor="#FF6C00"
            placeholderTextColor="#BDBDBD"
          /> */}
          <TextInput
            type="login"
            style={[
              styles.input,
              isHighlighted.login === "true" && styles.highlighted,
            ]}
            placeholder="Логин"
            value={formState.login}
            onChangeText={(value) =>
              setFormState((prevState) => ({
                ...prevState,
                login: value,
              }))
            }
            textContentType="username"
            placeholderTextColor="#BDBDBD"
            selectionColor="#FF6C00"
            onFocus={() => {
              onInputFocus();
              setIsHighlighted({
                login: "true",
              });
            }}
          />
          <TextInput
            style={[
              styles.input,
              isHighlighted.email === "true" && styles.highlighted,
            ]}
            placeholder="Адрес электронной почты"
            value={formState.email}
            onChangeText={(value) =>
              setFormState((prevState) => ({
                ...prevState,
                email: value,
              }))
            }
            selectionColor="#FF6C00"
            textContentType="emailAddress"
            placeholderTextColor="#BDBDBD"
            onFocus={() => {
              onInputFocus();
              setIsHighlighted({
                email: "true",
              });
            }}
          />
          {/* <Button title="Login" style={styles.btn} onPress={onLogin} /> */}
          <TouchableOpacity
            style={[
              styles.buttonTouchableOpacity,
              isShowKeyboard && styles.displayNone,
            ]}
            activeOpacity={0.7}
            onPress={onRegister}
          >
            <Text style={styles.textBtn}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    // justifyContent: "center",
    // backgroundColor: "#ecf0f1",
  },
  input: {
    width: "100%",
    position: "relative",
    height: 50,
    borderWidth: 1,
    backgroundColor: colors.inputBgColor,
    borderColor: colors.inputBorderColor,
    borderRadius: radius.input,
    borderStyle: "solid",
    fontSize: 18,
    padding: 16,
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: radius.mainBtn,
    elevation: 3,
    backgroundColor: colors.accentColor,
    selectionColor: "#FF6C00",

    placeholderTextColor: "#BDBDBD",
  },
  input: {
    // padding: 16,
    // width: 343,
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",

    // borderColor: "#E8E8E8",

    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderStyle: "solid",

    borderWidth: 1,

    borderColor: "#E8E8E8",
  },
  highlighted: {
    borderColor: "#FF6C00",
  },

  // notHighlighted: { borderColor: "#E8E8E8" },
  passwordInputBox: {
    width: "100%",
    // position: "relative",
    // marginBottom: 43,
    // alignItems: "baseline",
  },

  buttonTouchableOpacity: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    // elevation: 3,
    backgroundColor: "#FF6C00",
    width: "100%",
    height: 50,
    marginBottom: 16,
    // backgroundColor: Platform.OS === "ios" ? "#FF6C00" : "#FF6C00",
    // ...Platform.select({
    //   ios: { backgroundColor: "#FF6C00" },
    //   android: { backgroundColor: "#FF6C00" },
    // }),
  },
  highlighted: {
    borderColor: "#FF6C00",
  },
  textBtn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#fff",
  },
  passwordInput: {
    // width: 343,
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",

    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 85,
    borderRadius: 8,
    // marginBottom: 43,
    borderStyle: "solid",

    borderWidth: 1,

    borderColor: "#E8E8E8",
  },

  buttonSecureEntry: {
    alignItems: "center",
    justifyContent: "center",
    top: 4,
    // elevation: 3,
    backgroundColor: "#ff0000",
    position: "absolute",
    // top: "-50%",
    right: 0,
    padding: 0,
    // width: 75,
    height: 50,

    // backgroundColor: Platform.OS === "ios" ? "#FF6C00" : "#FF6C00",
    // ...Platform.select({
    //   ios: { backgroundColor: "#FF6C00" },
    //   android: { backgroundColor: "#FF6C00" },
    // }),
  },
  textBtnSecureEntry: {
    // // padding: 0,
    // fontSize: 16,
    // fontWweight: 400,
    // fontSize: 16,
    // lineHeight: 19,
    paddingVertical: 16,
    // paddingHorizontal: 32,
    color: "#1B4371",
  },
  buttonRoute: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FF6C00",

    // height: 50,
    // backgroundColor: Platform.OS === "ios" ? "#FF6C00" : "#FF6C00",
    // ...Platform.select({
    //   ios: { backgroundColor: "#FF6C00" },
    //   android: { backgroundColor: "#FF6C00" },
    // }),
  },
  textBtnRoute: {
    color: "#1B4371",
  },
  isHidden: {
    opacity: 0,
    pointerEvents: "none",
    visibility: "hidden",
  },
  displayNone: { display: "none" },
});

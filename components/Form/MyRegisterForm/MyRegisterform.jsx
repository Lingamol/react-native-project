import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { useState, useEffect } from "react";
import CustomInput from "../../Shared/ButtonMain/CustomInput";
import ButtonMain from "../../Shared/ButtonMain/ButtonMain";
import AvatarInput from "../AvatarInput/AvatarInput";
import useKeyboard from "../../../Hooks/UseKeybord";
import { colors, radius, fonts } from "../../../utils/variables";
import AuthLink from "../AuthLink/AuthLink";
import { useNavigation } from "@react-navigation/native";

const inputProps = {
  textContentType: "",
  value: "",
  isHighlighted: false,
  autoComplete: "email",
  autoFocus: false,
  caretHidden: false,
  editable: true,
  inputMode: "text",
  // text
  // decimal
  // numeric
  // tel
  // search
  // email
  // url
  keyboardType: "default",
  //   default
  // number-pad
  // decimal-pad
  // numeric
  // email-address
  // phone-pad
  // url
};
const registrationInitialState = {
  login: "",
  email: "",
  password: "",
};
const loginInitialState = {
  email: "",
  password: "",
};

export default function MyRegisterForm(props) {
  const { type } = props;
  const navigation = useNavigation();
  const isKeybordShowed = useKeyboard();
  isRegistration = type === "registration" ? true : false;
  const [formState, setFormState] = useState(
    isRegistration ? registrationInitialState : loginInitialState
  );
  registrationAndKeybord = isKeyboardShowed && isRegistration ? true : false;
  loginAndKeybord = isKeyboardShowed && !isRegistration ? true : false;

  const isKeyboardShowed = useKeyboard();
  const onRegister = () => {
    alert(
      `Register Credentials  Login:${formState.login}, Email:${formState.email} Password:${formState.password}`
    );
    navigation.navigate("Home");
  };
  const onLogin = () => {
    alert(
      `Login Credentials Email:${formState.email}, Password:${formState.password}`
    );
    navigation.navigate("Home");
    // setFormState(loginInitialState);
  };
  function onChangeLogin(value) {
    setFormState((prev) => ({ ...prev, login: value }));
  }
  function onChangeEmail(value) {
    setFormState((prev) => ({ ...prev, email: value }));
  }
  function onChangePassword(value) {
    setFormState((prev) => ({ ...prev, password: value }));
  }
  console.log("state", formState);
  return (
    // <View
    //   style={[
    //     styles.container,
    //     type === "registration"
    //       ? isKeyboardShowed
    //         ? styles.keyboardReg
    //         : styles.registration
    //       : isKeyboardShowed
    //       ? styles.keyboardLog
    //       : styles.login,
    //   ]}
    // >
    //   <Text style={styles.title}>
    //     {isRegistration ? "Реєстрація" : " Вхід"}
    //   </Text>
    <View style={styles.form}>
      {isRegistration && <AvatarInput />}
      {isRegistration && (
        <View style={styles.login}>
          <CustomInput
            placeholder={"Логін"}
            value={formState.login}
            onChange={onChangeLogin}
          />
        </View>
      )}
      <View style={styles.email}>
        <CustomInput
          placeholder={"Адреса електронної пошти"}
          autoComplete="email"
          onChange={onChangeEmail}
        />
      </View>
      <View
        style={[
          ,
          isRegistration ? styles.password : { marginBottom: 43 },
          isKeyboardShowed ? { marginBottom: 0 } : null,
        ]}
      >
        <CustomInput
          placeholder={"Пароль"}
          type={"password"}
          autoComplete="password"
          onChange={onChangePassword}
        />
      </View>
      <View>
        <ButtonMain
          title={isRegistration ? "Зареєстуватися" : "Увійти"}
          style={isKeyboardShowed ? styles.displayNone : null}
          activeOpacity={0.7}
          onPress={isRegistration ? onRegister : onLogin}
        />
      </View>
    </View>
    // {!isKeybordShowed && <AuthLink type={"registration"} />}
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 2,
    position: "relative",
    // flex: 1,
    flexDirection: "column",
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
  login: { maxHeight: 490, paddingTop: 32, paddingBottom: 111 },
  registration: {
    maxHeight: 550,
    paddingTop: 92,
    paddingBottom: 45,
  },
  keyboardReg: { maxHeight: 374, paddingBottom: 32, paddingTop: 92 },
  keyboardLog: { maxHeight: 248, paddingBottom: 32, paddingTop: 32 },
  form: { width: "100%", paddingHorizontal: 16 },
  login: { marginBottom: 16 },
  email: { marginBottom: 16 },
  password: { marginBottom: 60 },
  displayNone: { display: "none" },
});

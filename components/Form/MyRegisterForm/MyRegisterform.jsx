import { View, StyleSheet, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import CustomInput from "../../Shared/ButtonMain/CustomInput";
import ButtonMain from "../../Shared/ButtonMain/ButtonMain";
import useKeyboard from "../../../Hooks/UseKeybord";
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

export default function MyRegisterForm(props) {
  const { type } = props;
  const [formState, setFormState] = useState(initialState);
  const [isHighlighted, setIsHighlighted] = useState(initialStateHighlighted);
  const isKeyboardShowed = useKeyboard();
  // const [keyboardShowStatus, setKeyboardShowStatus] = useState(false);

  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
  //     setKeyboardShowStatus(true);
  //     console.log("Keybord", keyboardShowStatus);
  //   });
  //   const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
  //     setKeyboardShowStatus(false);
  //   });

  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);

  return (
    <View style={styles.form}>
      {type === "registration" && (
        <View style={styles.login}>
          <CustomInput
            placeholder={"Логін"}
            // isHighlighted={isHighlighted.login}
          />
        </View>
      )}
      <View style={styles.email}>
        <CustomInput placeholder={"Адреса електронної пошти"} />
      </View>
      <View style={styles.password}>
        <CustomInput placeholder={"Пароль"} type={"password"} />
      </View>
      <View>
        <ButtonMain
          title={"Зареєстуватися"}
          style={isKeyboardShowed ? styles.displayNone : null}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  form: { width: "100%", paddingHorizontal: 16, flex: 1 },
  login: { marginBottom: 16 },
  email: { marginBottom: 16 },
  password: { marginBottom: 60 },
  displayNone: { display: "none" },
});

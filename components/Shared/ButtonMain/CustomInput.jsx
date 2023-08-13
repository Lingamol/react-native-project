import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { colors, radius } from "../../../utils/variables";

const initialStateSecureEntry = { isShow: true, title: "Показати" };

export default function CustomInput(props) {
  const { type } = props;
  const initialState = { isValid: true, error: "" };
  const [error, setError] = useState(initialState);
  const [rules, setRules] = useState((props.rules = []));
  const [inFocus, setInFocus] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [secureEntry, setSecurityEntry] = useState(initialStateSecureEntry);

  const onShowToggle = () => {
    setSecurityEntry((prevState) => {
      if (!prevState.isShow) {
        return initialStateSecureEntry;
      }
      return {
        isShow: false,
        title: "Скрити",
      };
    });
  };

  return (
    <View>
      <View style={styles.container}>
        {props.label && <Text style={styles.label}>{props.label}</Text>}
        <TextInput
          style={[
            styles.input,
            inFocus && styles.highlighted,
            type === "password" ? styles.inputPassword : null,
          ]}
          value={props.value}
          placeholderTextColor={colors.placeHolderColor}
          selectionColor={colors.inputBorderColor}
          cursorColor={colors.mainTextColor}
          secureTextEntry={type === "password" ? secureEntry.isShow : false}
          onFocus={() => {
            setInFocus(true);
          }}
          onBlur={() => {
            setInFocus(false);
          }}
          {...props}
        />

        {!error.isValid && <Text style={styles.error}></Text>}
        {type === "password" && (
          <TouchableOpacity
            style={styles.buttonSecureEntry}
            activeOpacity={0.7}
            onPress={onShowToggle}
          >
            <Text style={styles.textBtnSecureEntry}>{secureEntry.title}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flexDirection: "column",
    // alignItems: "centere",
    // height: 50,
    // position: "relative",
    width: "100%",
  },
  label: {},
  input: {
    width: "100%",
    position: "relative",
    height: 50,
    // outline: "none",
    /* border: none; */
    borderWidth: 1,
    backgroundColor: colors.inputBgColor,
    borderColor: colors.inputBorderColor,
    borderRadius: radius.input,
    borderStyle: "solid",
    fontSize: 18,

    //   padding: 8px calc(#{$button-icon-size} + 25px) 8px 15px;
    padding: 16,
    //   min-width: 220px;
    //   width: 100%;
    //   &::placeholder {
    //     color: inherit;
    //     font-size: 18px;
    //     font-weight: 500;
    //   }
  },
  error: {
    position: "absolute",
    left: 0,
    bottom: -12,
    fontSize: 11,
    color: "red",
  },

  highlighted: {
    borderColor: colors.accentColor,
    backgroundColor: colors.mainBgColor,
  },
  buttonSecureEntry: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 16,
    padding: 0,
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
    color: colors.passwordShowBtnTextColor,
  },
  inputPassword: { paddingRight: 90 },
});

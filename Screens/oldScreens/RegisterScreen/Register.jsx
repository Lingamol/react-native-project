import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  Alert,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ScreenContainer from "../../ScreenContainer/ScreenContainer";
import Svg, { Circle } from "react-native-svg";
const bgImage = require("../../../assets/img/bg/main-bg2x.jpg");
const avatarImage = require("../../../assets/img/avatar/avatar.jpeg");
// const addBtnImg = require("../../assets/");
import AddBtn from "../../../assets/svg/add.svg";
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
const initialStateSecureEntry = { isShow: true, title: "показать" };

export default function RegistrationScreen2() {
  const [formState, setFormState] = useState(initialState);

  const [secureEntry, setSecurityEntry] = useState(initialStateSecureEntry);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  const [isHighlighted, setIsHighlighted] = useState(initialStateHighlighted);

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

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width; //- 20 * 2;
      console.log("width", width);
      setDimensions(width);
    };
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      // setKeyboardStatus("Keyboard Hidden");
      setIsShowKeyboard(false);
      console.log("keyboarIsHiden!");
    });
    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange);

      hideSubscription.remove();
    };
  }, []);

  // useEffect(() => {
  //   // const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
  //   //   setKeyboardStatus("Keyboard Shown");
  //   // });
  //   const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
  //     // setKeyboardStatus("Keyboard Hidden");
  //     setIsShowKeyboard(false);
  //     console.log("keyboarIsHiden!");
  //   });

  //   return () => {
  //     // showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);
  // console.log(Platform.OS);
  return (
    // <View style={styles.container}>
    //   <ImageBackground source={bgImage} style={styles.imageBg}>
    <ScreenContainer>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        {/* <View style={styles.innerBox}> */}
        {/* <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          > */}
        <View
          style={{
            ...styles.form,
            // marginBottom: isShowKeyboard ? 50 : 200,
            width: dimensions,
            paddingBottom: isShowKeyboard ? 10 : 100,
          }}
        >
          <View style={styles.avatarBox}>
            <Image source={avatarImage} />
            <TouchableOpacity
              style={styles.buttonAddAvatar}
              activeOpacity={0.7}
              onPress={onRegister}
            >
              <AddBtn width={25} height={25} fill={"#FF6C00"} />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Регистрация</Text>
          </View>

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
          <View
            style={[
              styles.passwordInputBox,
              { marginBottom: isShowKeyboard ? 10 : 43 },
            ]}
          >
            <TextInput
              style={[
                styles.passwordInput,
                isHighlighted.password === "true" && styles.highlighted,
              ]}
              placeholder="Пароль"
              value={formState.password}
              secureTextEntry={secureEntry.isShow}
              onChangeText={(value) =>
                setFormState((prevState) => ({
                  ...prevState,
                  password: value,
                }))
              }
              selectionColor="#FF6C00"
              textContentType="newPassword"
              placeholderTextColor="#BDBDBD"
              onFocus={() => {
                onInputFocus();
                setIsHighlighted({
                  password: "true",
                });
              }}
            />
            <TouchableOpacity
              style={styles.buttonSecureEntry}
              activeOpacity={0.7}
              onPress={onShowToggle}
            >
              <Text style={styles.textBtnSecureEntry}>{secureEntry.title}</Text>
            </TouchableOpacity>
          </View>

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
          <TouchableOpacity
            style={[styles.buttonRoute, isShowKeyboard && styles.displayNone]}
            activeOpacity={0.7}
            onPress={onRegister}
          >
            <Text style={styles.buttonRoute}>Уже есть аккаунт? Войти</Text>
          </TouchableOpacity>
        </View>
        {/* </KeyboardAvoidingView> */}
        {/* </View> */}
      </TouchableWithoutFeedback>

      {/* </ImageBackground>
    </View> */}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  // imageBg: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  // },
  // innerBox: { flex: 1, justifyContent: "flex-end" },
  form: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    // height: 550,

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
    // paddingBottom: 0,
    // marginHorizontal: 40,
  },
  avatarBox: { position: "absolute", width: 120, height: 120, top: -60 },
  header: { alignItems: "center", marginBottom: 32 },

  headerTitle: {
    fontFamily: "Roboto-Bold",
    fontStyle: "normal",
    // fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
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
  buttonAddAvatar: {
    position: "absolute",
    right: -12,
    top: 81,
  },
});

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import ScreenBg from "../components/ScreenBg";
import MyRegisterForm from "../components/Form/MyRegisterForm/MyRegisterform";
import FormContainer from "../components/Form/FormContainer/FormContainer";
import AuthLink from "../components/Form/AuthLink/AuthLink";
export default function Login() {
  return (
    <View style={styles.container}>
      <ScreenBg>
        <FormContainer type={"login"} title={"Вхід"}>
          <MyRegisterForm type={"login"} />
          <AuthLink type={"login"} />
        </FormContainer>
      </ScreenBg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "space-between",
    // backgroundColor: "red",
    // paddingBottom: 30,
  },
  content: { justifyContent: "flex-end", flex: 1 },
  //   formWrapper: { flex: 1 },
  //   formContainer: {
  //     maxHeight: 490,
  //     backgroundColor: "blue",
  //   },
  //   formTitle: { fontSize: 30, color: "#e3e3e3", textAlign: "center" },
  //   input: {
  //     paddingHorizontal: 15,
  //     backgroundColor: "green",
  //     height: 50,

  //     borderRadius: 15,
  //     borderColor: "violet",
  //     borderWidth: 4,
  //   },
  //   formWrapper: {},
});

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
const Registration = () => {
  return (
    <View style={styles.container}>
      <ScreenBg>
        <FormContainer type={"registration"} title={"Реєстрація"}>
          <MyRegisterForm type={"registration"} />
          <AuthLink type={"registration"} />
        </FormContainer>
      </ScreenBg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "space-between",
    // backgroundColor: "red",
    // paddingBottom: 30,
  },
  content: { justifyContent: "flex-end", flex: 1 },
});

export default Registration;

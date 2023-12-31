import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import ScreenBg from "../components/ScreenBg";
import MyRegisterForm from "../components/Form/MyRegisterForm/MyRegisterform";
import FormContainer from "../components/Form/FormContainer/FormContainer";
import AuthLink from "../components/Form/AuthLink/AuthLink";
import { useNavigation } from "@react-navigation/native";
const Registration = () => {
  const screenWidth = Dimensions.get("screen").width;
  return (
    <View style={styles.container}>
      <ScreenBg>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ flex: 1, width: screenWidth }}
        >
          <FormContainer
            type={"registration"}
            title={"Реєстрація"}
            imgUrl="https://res.cloudinary.com/dwad7k3ud/image/upload/v1692363869/avatar/avatar_a8vxal.jpg"
          >
            <MyRegisterForm type={"registration"} />
            <AuthLink type={"registration"} />
          </FormContainer>
        </TouchableWithoutFeedback>
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

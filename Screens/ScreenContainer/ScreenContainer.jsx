import {
  View,
  ImageBackground,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
const bgImage = require("../../assets/img/bg/main-bg2x.jpg");
export default function ScreenContainer({ children }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.imageBg}>
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.KeyboardAvoiding}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        {children}
        {/* </TouchableWithoutFeedback>
        </KeyboardAvoidingView> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
  },
  KeyboardAvoiding: { width: "100%" },
  container: {
    flex: 1,
    width: "100%",
  },
});

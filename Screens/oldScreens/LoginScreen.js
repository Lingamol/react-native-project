import { View, StyleSheet, Text, ImageBackground } from "react-native";
const image = require("../../assets/img/bg/main-bg2x.jpg");
import FormContainer from "../../components/Form/FormContainer";
import { colors } from "../../utils/variables";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <FormContainer title={"Увійти"}>
          {/* <Text style={styles.text}>Inside</Text> */}
        </FormContainer>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
  image: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // objectFit: "cover",
  },

  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

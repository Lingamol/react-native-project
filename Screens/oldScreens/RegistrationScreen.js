import { StyleSheet, Text, View, ImageBackground } from "react-native";
const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
const bgImage = require("../../assets/img/bg/main-bg2x.jpg");

export default function RegistrationScreen1() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        // source={require("../../assets/img/bg/main-bg1x.jpg")}

        style={styles.image}
      >
        <Text style={styles.text}>test!</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: { fontFamily: "Montserrat-Bold", fontSize: 30 },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

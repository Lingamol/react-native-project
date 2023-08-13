import { View, ImageBackground, StyleSheet } from "react-native";
const bgImage = require("../../assets/img/bg/main-bg2x.jpg");
export default function ScreenContainer({ children }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.imageBg}>
        {children}
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
  },
});

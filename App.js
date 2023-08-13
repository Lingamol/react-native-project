// import { StatusBar } from "expo-status-bar";

// import { StyleSheet, Text, View, Image } from "react-native";
// import { useFonts } from "expo-font";
// import CircleLoader from "./components/Loaders/CircleLoader";
// import RegistrationScreen from "./components/Loaders/CircleLoader";

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
//     "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
//   });
//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Some Text</Text>
//       <Text style={styles.text}>Some Text</Text>
//       <CircleLoader />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: { fontFamily: "Montserrat-Bold", fontSize: 30 },
//   // cat: { position: "absolute", zIndex: 100 },
// });
//////////////////////////////////////////////////////////////////////////////////////
// import RegistrationScreen from "./Screens/RegistrationScreen";
// import LoginScreen from "./Screens/LoginScreen";
// import AppLoading from "expo-app-loading";
import React, { useCallback, useEffect, useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { colors } from "./utils/variables";

import RegistrationScreen from "./Screens/Auth/RegistrationScreen/RegistrationScreen.jsx";

SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  return await Font.loadAsync({
    "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 12000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <LoginScreen /> */}
      {/* <RegistrationScreen2 /> */}
      <RegistrationScreen />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Regular",
    color: colors.mainTextColor,
  },
});

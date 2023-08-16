import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../../utils/variables";
import useKeyboard from "../../../Hooks/UseKeybord";
import { useNavigation } from "@react-navigation/native";

export default function AuthLink(props) {
  const { type, onPress } = props;
  const isRegistrarion = type === "registration" ? true : false;
  const isKeybordShowed = useKeyboard();
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <Text>{isRegistrarion ? "Вже є акаунт? " : "Немає акаунту? "}</Text>
      <TouchableOpacity
        onPress={
          isRegistrarion
            ? () => navigation.navigate("Login")
            : () => navigation.navigate("Registration")
        }
      >
        <Text>{isRegistrarion ? "Увійти" : "Зареєструватися"}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: "row", marginTop: 16 },
  text: { color: colors.secondaryTextColor, fontSize: 16 },
  link: { color: colors.secondaryTextColor, fontSize: 16 },
});

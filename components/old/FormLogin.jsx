import { View, StyleSheet, Text } from "react-native";
import ButtonMain from "../Shared/ButtonMain/ButtonMain";
import CustomInput from "../Shared/ButtonMain/CustomInput";

export default function FormLogin() {
  return (
    <View style={styles.container}>
      {/* <Text>Button</Text> */}
      <CustomInput label={"Email"} />
      <CustomInput label={"Password"} />
      <ButtonMain
        title={"Вход"}
        type={"button"}
        onPress={() => {
          alert("click");
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    width: "100%",
    height: "auto",
    // with: 50,
    // height: 50,
    // backgroundColor: "grey",
    borderWidth: 5,
    flexDirection: "column",
  },
});

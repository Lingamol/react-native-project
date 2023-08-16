import { View, StyleSheet, Text } from "react-native";
import ScreenContainer from "../../ScreenContainer/ScreenContainer";
import FormContainer from "../../../components/Form/FormContainer/FormContainer";
import MyRegisterForm from "../../../components/Form/MyRegisterForm/MyRegisterform";
import AuthLink from "../../../components/Form/AuthLink/AuthLink";
import useKeyboard from "../../../Hooks/UseKeybord";
useKeyboard;
export default function LoginScreen() {
  const isKeybordShowed = useKeyboard();
  return (
    <View style={styles.container}>
      <ScreenContainer>
        {/* <FormContainer title={"Увійти"} type={"login"}> */}
        {/* <MyRegisterForm type={"login"} />
          {!isKeybordShowed && <AuthLink type={"login"} />} */}
        {/* </FormContainer> */}
        <Text>sdfghjgfd</Text>
      </ScreenContainer>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1 } });

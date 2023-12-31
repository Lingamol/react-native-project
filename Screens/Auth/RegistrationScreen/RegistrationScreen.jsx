import { View, StyleSheet } from "react-native";
import ScreenContainer from "../../ScreenContainer/ScreenContainer";
import FormContainer from "../../../components/Form/FormContainer/FormContainer";
import MyRegisterForm from "../../../components/Form/MyRegisterForm/MyRegisterform";
import AuthLink from "../../../components/Form/AuthLink/AuthLink";
import useKeyboard from "../../../Hooks/UseKeybord";
useKeyboard;
export default function RegistrationScreen() {
  const isKeybordShowed = useKeyboard();
  return (
    <View style={styles.container}>
      <ScreenContainer>
        <FormContainer title={"Реєстрація"} type={"registration"}>
          <MyRegisterForm type={"registration"} />
          {!isKeybordShowed && <AuthLink type={"registration"} />}
        </FormContainer>
      </ScreenContainer>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1 } });

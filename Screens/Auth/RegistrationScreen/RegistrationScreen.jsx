import { View, StyleSheet } from "react-native";
import ScreenContainer from "../../ScreenContainer/ScreenContainer";
import FormContainer from "../../../components/Form/FormContainer/FormContainer";
import MyRegisterForm from "../../../components/Form/MyRegisterForm/MyRegisterform";
export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ScreenContainer>
        <FormContainer title={"Реєстрація"} type={"registration"}>
          <MyRegisterForm type={"registration"} />
        </FormContainer>
      </ScreenContainer>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1 } });

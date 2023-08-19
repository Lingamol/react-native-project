import { View, StyleSheet, TextInput } from "react-native";
import AddCommentBtn from "./AddCommentBtn";
import { colors, radius } from "../../utils/variables";
import { AntDesign } from "@expo/vector-icons";
export default function CommentsAddForm() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Коментувати..." />
      <AddCommentBtn
        btnRadius={50}
        style={styles.btn}
        onPress={() => alert("Add comment")}
      >
        <AntDesign name="arrowup" size={20} color="#fff" />
      </AddCommentBtn>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { width: "100%", padding: 16 },
  input: {
    position: "relative",
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 56,
    height: 50,
    backgroundColor: colors.inputBgColor,
    borderRadius: radius.mainBtn,
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
  },
  btn: { position: "absolute", top: 24, right: 26 },
});

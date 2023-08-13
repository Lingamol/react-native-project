import { View, StyleSheet, Image } from "react-native";
import Avatar from "../../Avatar/Avatar";
import { colors } from "../../../utils/variables";
import AddBtn from "../../../assets/svg/add.svg";
export default function AvatarInput() {
  return (
    <View style={styles.container}>
      <Avatar />
      <AddBtn style={styles.inputIcon} />
      {/* <Image source={AddIcon} style={styles.input} /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: colors.secondaryBgColor,
    position: "absolute",
    top: -60,
    left: "50%",
    // transform: [{ translateX: -50 }, { translateY: -50 }],
    transform: [{ translateX: -50 }],
  },
  inputIcon: {
    position: "absolute",
    right: -12.5,
    top: 76,
    width: 25,
    height: 25,
    fill: "#fF6C00",
    stroke: "#FF6C00",
  },
});

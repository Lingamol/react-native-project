import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../utils/variables";
import LikeIcon from "../../assets/svg/thumbs-up.svg";
export default function AmoutLikes(props) {
  const { amountLikes } = props;

  return (
    <View style={styles.container}>
      <LikeIcon style={[styles.icon, amountLikes && styles.activeIcon]} />
      <Text style={styles.text}>{amountLikes}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  icon: { width: 24, height: 24, stroke: colors.placeHolderColor },
  activeIcon: { stroke: colors.accentColor, fill: colors.accentColor },
  text: { fontSize: 16, color: colors.placeHolderColor, marginLeft: 5 },
});

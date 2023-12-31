import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../utils/variables";
import MessageIcon from "../../assets/svg/message-circle.svg";
export default function AmoutComments(props) {
  const { amountComments } = props;

  return (
    <View style={styles.container}>
      <MessageIcon style={[styles.icon, amountComments && styles.activeIcon]} />
      <Text style={styles.text}>{amountComments}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  icon: { width: 24, height: 24, stroke: colors.placeHolderColor },
  activeIcon: { stroke: colors.accentColor, fill: colors.accentColor },
  text: { fontSize: 16, color: colors.placeHolderColor, marginLeft: 5 },
});

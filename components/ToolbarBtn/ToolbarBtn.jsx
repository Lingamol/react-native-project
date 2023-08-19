import { View, StyleSheet } from "react-native";
import { colors, radius } from "../../utils/variables";
export default function ToolbarBtn({ children, ...props }) {
  const { disabled = false } = props;
  return (
    <View style={[styles.container, disabled && styles.disabled]}>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 40,
    backgroundColor: colors.accentColor,
    borderRadius: radius.mainBtn,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    backgroundColor: colors.inputBgColor,
  },
});

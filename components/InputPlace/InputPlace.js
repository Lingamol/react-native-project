import { View, StyleSheet, TextInput } from "react-native";
import MapPinIcon from "../../assets/svg/map-pin.svg";
import { colors } from "../../utils/variables";
export default function InputPlace(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Місцевість..." />
      <MapPinIcon style={styles.Icon} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { position: "relative", height: 50, marginTop: 16 },
  input: {
    paddingLeft: 28,
    paddingVertical: 15,
    borderColor: colors.inputBorderColor,
    borderBottomWidth: 1,
  },
  Icon: { width: 24, height: 24, position: "absolute", top: 15 },
});

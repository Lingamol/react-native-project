import { View, StyleSheet, Text } from "react-native";
import LocationPinIcon from "../../assets/svg/map-pin.svg";
import { colors } from "../../utils/variables";

export default function PostLocation(props) {
  const { location } = props;
  return (
    <View style={styles.container}>
      <LocationPinIcon style={styles.icon} />
      <Text style={styles.text}>{location}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  icon: { width: 24, height: 24 },
  text: {
    marginLeft: 5,
    color: colors.mainTextColor,
    fontSize: 16,
    fontWeight: "400",
  },
});

import { View, StyleSheet, Text } from "react-native";
import LocationPinIcon from "../../assets/svg/map-pin.svg";
import { colors } from "../../utils/variables";

export default function PostLocation(props) {
  const { location, profile } = props;
  return (
    <View style={[styles.container, profile ? { width: 110 } : { width: 260 }]}>
      <LocationPinIcon style={styles.icon} />
      <Text style={[styles.text]} ellipsizeMode="tail" numberOfLines={1}>
        {location}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 260,
    // borderWidth: 2,
    // borderColor: "red",
  },
  icon: { width: 24, height: 24 },
  text: {
    marginLeft: 5,
    color: colors.mainTextColor,
    fontSize: 16,
    fontWeight: "400",
  },
});

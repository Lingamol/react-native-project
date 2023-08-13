import { View, Image, StyleSheet } from "react-native";
import { colors } from "../../utils/variables";
import Photo from "../../assets/img/avatar/avatar.jpeg";
export default function Avatar(imgUrl = null) {
  return (
    <View style={styles.container}>
      <Image source={Photo} style={styles.photo} />
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
  },
  photo: { height: 120, width: 120, borderRadius: 16 },
});

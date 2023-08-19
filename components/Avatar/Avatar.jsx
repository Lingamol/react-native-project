import { View, Image, StyleSheet } from "react-native";
import { colors } from "../../utils/variables";
import { radius } from "../../utils/variables";
export default function Avatar(props) {
  const { imgUrl = null, size = 120, radiusImage = radius.avatar } = props;
  return (
    <View
      style={[
        styles.container,
        { height: size, width: size, borderRadius: radiusImage },
      ]}
    >
      {imgUrl && (
        <Image
          source={{ uri: `${imgUrl}` }}
          style={[
            styles.photo,
            { height: size, width: size, borderRadius: radiusImage },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBgColor,
  },
  photo: {},
});

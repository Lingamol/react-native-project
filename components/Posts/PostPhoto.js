import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CameraIcon from "../../assets/svg/camera.svg";
import { colors, radius } from "../../utils/variables";
export default function PostPhoto(props) {
  const { imgUrl = null } = props;

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        {imgUrl && <Image source={{ uri: `${imgUrl}` }} style={styles.image} />}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  imgContainer: {
    position: "relative",
    width: 343,
    height: 240,
    backgroundColor: colors.inputBgColor,
    borderColor: colors.inputBorderColor,
    borderWidth: 1,
    borderRadius: radius.postImage,
  },
  image: { width: 343, height: 240 },
});

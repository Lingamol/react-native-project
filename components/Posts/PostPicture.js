import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CameraIcon from "../../assets/svg/camera.svg";
import { colors, radius } from "../../utils/variables";
import PostPhoto from "./PostPhoto";
export default function PostPicture(props) {
  const { imgUrl = null } = props;

  return (
    <View style={styles.container}>
      <View style={styles.imgTumb}>
        <View style={styles.photo}>
          <PostPhoto imgUrl={imgUrl} />
        </View>

        <TouchableOpacity
          style={styles.cameraBtn}
          onPress={
            imgUrl ? () => alert("edit photo") : () => alert("upload photo")
          }
        >
          <CameraIcon width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.editPhotoBtn}
          onPress={
            imgUrl ? () => alert("edit photo") : () => alert("upload photo")
          }
        >
          <Text styl={styles.btnText}>
            {imgUrl ? "Редагувати фото" : "Завантажте фото"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  photo: {
    position: "relative",
  },
  image: { width: 343, height: 240 },

  cameraBtn: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.cameraBtnBg,
    position: "absolute",
    top: 90,
    left: 141,
    alignItems: "center",
    justifyContent: "center",
    // transform: [{ translateY: 150 }, { translateX: -50% }],
  },
  editPhotoBtn: { marginTop: 9 },

  btnText: {
    color: colors.placeHolderColor,
    fontSize: 16,
    fontWeight: 400,
  },
  imgTumb: {},
});

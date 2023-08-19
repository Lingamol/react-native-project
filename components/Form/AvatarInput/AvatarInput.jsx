import { View, StyleSheet, TouchableOpacity } from "react-native";
// import DocumentPicker from "react-native-document-picker";
import Avatar from "../../Avatar/Avatar";
import { colors } from "../../../utils/variables";
import AddBtn from "../../../assets/svg/add.svg";

export default function AvatarInput(props) {
  const { delBtn } = props;
  const onAddAvatar = () => {
    alert("addAvatar");
  };
  // async function docPicker() {
  //   // Pick a single file
  //   try {
  //     const res = await DocumentPicker.pick({
  //       //by using allFiles type, you will able to pick any type of media from user device,
  //       //There can me more options as well
  //       //DocumentPicker.types.images: All image types
  //       //DocumentPicker.types.plainText: Plain text files
  //       //DocumentPicker.types.audio: All audio types
  //       //DocumentPicker.types.pdf: PDF documents
  //       //DocumentPicker.types.zip: Zip files
  //       //DocumentPicker.types.csv: Csv files
  //       //DocumentPicker.types.doc: doc files
  //       //DocumentPicker.types.docx: docx files
  //       //DocumentPicker.types.ppt: ppt files
  //       //DocumentPicker.types.pptx: pptx files
  //       //DocumentPicker.types.xls: xls files
  //       //DocumentPicker.types.xlsx: xlsx files
  //       //For selecting more more than one options use the
  //       //type: [DocumentPicker.types.csv,DocumentPicker.types.xls]
  //       type: [DocumentPicker.types.allFiles],
  //     });
  //     console.log(
  //       res.uri,
  //       res.type, // mime type
  //       res.name,
  //       res.size
  //     );
  //     // this.uploadAPICall(res); //here you can call your API and send the data to that API
  //     console.log("RES", res);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       console.log("error -----", err);
  //     } else {
  //       throw err;
  //     }
  //   }
  // }
  return (
    <View style={styles.container}>
      <Avatar
        imgUrl={
          "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692363869/avatar/avatar_a8vxal.jpg"
        }
      />
      {/* <AddBtn style={styles.inputIcon} /> */}
      <TouchableOpacity
        style={[delBtn ? styles.buttonDelAvatar : styles.buttonAddAvatar]}
        activeOpacity={0.7}
        onPress={onAddAvatar}
      >
        <AddBtn style={[delBtn ? styles.inputIconDel : styles.inputIconAdd]} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: colors.secondaryBgColor,
    position: "absolute",
    top: -230,
    left: "50%",
    // transform: [{ translateX: -50 }, { translateY: -50 }],
    transform: [{ translateX: -50 }],

    zIndex: 1,
  },
  inputIconAdd: {
    width: 25,
    height: 25,
    fill: colors.accentColor,
    stroke: colors.accentColor,
  },
  inputIconDel: {
    width: 25,
    height: 25,
    fill: colors.inputBorderColor,
    stroke: colors.inputBorderColor,
  },
  buttonAddAvatar: { position: "absolute", right: -12.5, top: 76 },
  buttonDelAvatar: {
    position: "absolute",
    right: -12.5,
    top: 76,
    transform: [{ rotateY: "-45deg" }],
  },
});

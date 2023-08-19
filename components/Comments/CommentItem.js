import { View, Text, StyleSheet } from "react-native";
import Avatar from "../Avatar/Avatar";
import { colors, radius } from "../../utils/variables";
export default function CommentsItem(props) {
  const { comment, isEven } = props;
  const { authorAvatar, content, date } = comment;
  console.log("isEven", isEven);
  return (
    <View
      style={[
        styles.container,
        !isEven && {
          flexDirection: "row-reverse",
        },
      ]}
    >
      <Avatar imgUrl={authorAvatar} size={28} radiusImage={50} />
      <View
        style={[
          styles.commentContainer,
          !isEven && styles.commentContainerEven,
        ]}
      >
        <Text style={styles.comment}>{content}</Text>
        <Text style={[styles.date, !isEven && { textAlign: "left" }]}>
          {date}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 24 },
  commentContainer: {
    marginLeft: 16,
    backgroundColor: colors.commentBg,
    borderTopRightRadius: radius.comment,
    borderBottomRightRadius: radius.comment,
    borderBottomLeftRadius: radius.comment,
    width: 300,
    padding: 16,
  },
  commentContainerEven: {
    marginRight: 16,
    marginLeft: 0,

    borderTopLeftRadius: radius.comment,
    borderTopRightRadius: 0,
  },
  comment: {
    color: colors.mainTextColor,
    fontSize: 13,
    fontWeight: "400",
  },
  date: {
    color: colors.placeHolderColor,
    textAlign: "right",
    fontSize: 10,
    marginTop: 8,
  },
});

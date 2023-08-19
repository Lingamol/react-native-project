import { View, StyleSheet, Text } from "react-native";
import PostPhoto from "./PostPhoto";
import { colors } from "../../utils/variables";
import AmoutComments from "./AmountComments";
import PostLocation from "./PostLocation";
export default function PostItem(props) {
  const { post } = props;
  const { imgUrl, title, amountComments, location } = post;

  return (
    <View style={styles.container}>
      <PostPhoto imgUrl={imgUrl} />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.info}>
        <View style={{ marginRight: 50 }}>
          <AmoutComments amountComments={amountComments} />
        </View>
        <PostLocation location={location} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { marginBottom: 32 },
  text: {
    color: colors.placeHolderColor,
    fontSize: 16,
    fontWeight: "400",
    marginTop: 8,
  },
  info: { flexDirection: "row" },
});

import { View, StyleSheet, Text } from "react-native";
import PostPhoto from "./PostPhoto";
import { colors } from "../../utils/variables";
import AmoutComments from "./AmountComments";
import AmoutLikes from "./AmountLikes";
import PostLocation from "./PostLocation";

function locationCountry(text) {
  const index = text.indexOf("Region, ");
  return text.slice(index + 8, text.length);
}
function textLimit(text, maxlimit) {
  text.length > maxlimit ? text.substring(0, maxlimit - 3) + "..." : text;
}
export default function PostItem(props) {
  const { post, profile = false } = props;
  const { imgUrl, title, amountComments, location, amountLikes } = post;
  // console.log("text", locationCountry(location));
  return (
    <View style={styles.container}>
      <PostPhoto imgUrl={imgUrl} />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.info}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={profile && { marginRight: 24 }}>
            <AmoutComments amountComments={amountComments} />
          </View>
          {profile && <AmoutLikes amountLikes={amountLikes} />}
        </View>
        <PostLocation
          location={profile ? locationCountry(location) : location}
          profile={profile}
        />
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
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

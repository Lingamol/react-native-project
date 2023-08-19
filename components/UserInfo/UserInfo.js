import { View, StyleSheet, Text } from "react-native";
import Avatar from "../Avatar/Avatar";
import { colors } from "../../utils/variables";
export default function UserInfo(props) {
  const { userName, userEmail, avatarUrl } = props;
  return (
    <View style={styles.container}>
      <Avatar imgUrl={avatarUrl} size={60} />
      <View style={styles.info}>
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.email}>{userEmail}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  info: { marginLeft: 8 },
  name: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.mainTextColor,
  },

  email: {
    color: colors.userInfoEmailText,
    fontSize: 11,
    fontWeight: "400",
  },
});

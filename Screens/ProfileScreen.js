import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import ToolbarBtn from "../components/ToolbarBtn/ToolbarBtn";
import { colors, fonts, radius } from "../utils/variables";
import UserInfo from "../components/UserInfo/UserInfo";
import PostItem from "../components/Posts/PostItem";
import ScreenBg from "../components/ScreenBg";
import AvatarInput from "../components/Form/AvatarInput/AvatarInput";
import LogoutIcon from "../assets/svg/log-out.svg";
import { Feather } from "@expo/vector-icons";
import { posts } from "../mokaData/posts";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("screen").width;
  function User() {
    const user = {
      name: "Natali Romanova",
      email: "",
      avatarUrl:
        "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692363869/avatar/avatar_a8vxal.jpg",
    };
    // const { user, posts } = props;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <ScreenBg>
          <View style={[styles.container]}>
            <Text style={styles.title}>{user.name}</Text>
            <View style={styles.avatarPosition}>
              <AvatarInput imgUrl={user.avatarUrl} />
            </View>
            <View style={styles.logoutBtnPosition}>
              <TouchableOpacity onPress={() => navigation.navigate("Test")}>
                {/* <LogoutIcon style={styles.iconLogout} /> */}
                <Feather
                  name="log-out"
                  size={24}
                  color={colors.placeHolderColor}
                />
              </TouchableOpacity>
            </View>
            {/* <ScrollView></ScrollView> */}
            <View style={styles.galleryContainer}>
              <FlatList
                data={posts}
                renderItem={({ item }) => (
                  <PostItem post={item} profile={true} />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </ScreenBg>
      </View>
    );
  }
  function Grid() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Grid</Text>
        <ToolbarBtn />
      </View>
    );
  }

  function Toolbar() {
    return (
      <View style={{ flex: 1 }}>
        <UserInfo
          avatarUrl={
            "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692363869/avatar/avatar_a8vxal.jpg"
          }
          userName={"Natali Romanova"}
          userEmail={"email@example.com"}
        />
        {/* <ScrollView contentContainerStyle={styles.galleryContainer}>
          {posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              // post={{
              //   imgUrl:
              //     "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692381429/postImages/Rectangle_23_khco9w.jpg",
              //   title: "Ліс",
              //   location: "Ivano-Frankivs'k Region, Ukraine",
              //   amountComents: 5,
              // }}
            />
          ))}
        </ScrollView> */}
        <View style={styles.galleryContainer}>
          <FlatList
            data={posts}
            renderItem={({ item }) => <PostItem post={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Grid") {
            iconName = focused ? "grid-outline" : "grid-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Toolbar") {
            // iconName = focused ? "ios-list-circle" : "ios-list";
            // return <Ionicons name={iconName} size={size} color={color} />;
            return <AntDesign name="plus" size={24} color={color} />;
          } else if (route.name === "User") {
            iconName = focused ? "user" : "user";
            return (
              <ToolbarBtn>
                <AntDesign name={iconName} size={size} color="#fff" />
              </ToolbarBtn>
            );
          }
          l;
        },
        tabBarStyle: { paddingTop: 9, height: 83 },
        tabBarActiveTintColor: colors.accentColor,
        tabBarInactiveTintColor: colors.mainTextColor,
      })}
      //   tabBarOptions={{
      //     activeTintColor: "tomato",
      //     inactiveTintColor: "gray",
      //   }}
    >
      <Tabs.Screen name="Grid" component={Grid} />
      <Tabs.Screen name="User" component={User} />
      <Tabs.Screen name="Toolbar" component={Toolbar} />
    </Tabs.Navigator>
  );
}
const styles = StyleSheet.create({
  galleryContainer: {
    backgroundColor: colors.mainBgColor,
    flexGrow: 1,
    alignItems: "center",
  },
  container: {
    // width: "100%",
    // borderWidth: 2,
    maxHeight: "80%",
    position: "relative",
    paddingTop: 92,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.mainBgColor,
  },
  avatarPosition: {
    position: "absolute", // position: "absolute",
    top: -60,
    left: "50%",
    // transform: [{ translateX: -50 }, { translateY: -50 }],
    transform: [{ translateX: -50 }],
  },
  title: {
    fontFamily: fonts.mainRegularFont,
    color: colors.mainTextColor,
    textAlign: "center",
    fontSize: 30,
    marginBottom: 32,
  },
  iconLogout: { width: 24, heigt: 24 },
  logoutBtnPosition: { position: "absolute", right: 15, top: 22 },
  logoutBtn: { alignItems: "center", justifyContent: "center" },
});

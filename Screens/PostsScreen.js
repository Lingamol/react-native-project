import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import ToolbarBtn from "../components/ToolbarBtn/ToolbarBtn";
import { colors } from "../utils/variables";
import UserInfo from "../components/UserInfo/UserInfo";
import PostItem from "../components/Posts/PostItem";

const posts = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692381429/postImages/Rectangle_23_khco9w.jpg",
    title: "Ліс",
    location: "Ivano-Frankivs'k Region, Ukraine",
    amountComments: 5,
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692381429/postImages/Rectangle_23_khco9w.jpg",
    title: "Ліс",
    location: "Ivano-Frankivs'k Region, Ukraine",
    amountComments: 5,
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692381429/postImages/Rectangle_23_khco9w.jpg",
    title: "Ліс",
    location: "Ivano-Frankivs'k Region, Ukraine",
    amountComments: 5,
  },
];

export default function PostScreen() {
  const screenWidth = Dimensions.get("screen").width;
  function User() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>User!</Text>
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
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Grid") {
            iconName = focused ? "grid-outline" : "grid-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Toolbar") {
            // iconName = focused ? "ios-list-circle" : "ios-list";
            // return <Ionicons name={iconName} size={size} color={color} />;
            return (
              <ToolbarBtn>
                <Text
                  style={{
                    color: colors.mainBgColor,
                    fontSize: 30,
                    fontWeight: "300",
                  }}
                >
                  +
                </Text>
              </ToolbarBtn>
            );
          } else if (route.name === "User") {
            iconName = focused ? "user" : "user";
            return <AntDesign name={iconName} size={size} color={color} />;
          }
          l;
        },
        tabBarStyle: { paddingTop: 9, height: 83 },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
      //   tabBarOptions={{
      //     activeTintColor: "tomato",
      //     inactiveTintColor: "gray",
      //   }}
    >
      <Tabs.Screen name="Grid" component={Grid} />
      <Tabs.Screen name="Toolbar" component={Toolbar} />
      <Tabs.Screen name="User" component={User} />
    </Tabs.Navigator>
  );
}
const styles = StyleSheet.create({
  galleryContainer: {
    backgroundColor: "red",
    flexGrow: 1,
    alignItems: "center",
  },
});

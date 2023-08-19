import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import ToolbarBtn from "../components/ToolbarBtn/ToolbarBtn";
import { colors } from "../utils/variables";
import UserInfo from "../components/UserInfo/UserInfo";
import PostPicture from "../components/Posts/PostPicture";
import { TextInput } from "react-native-gesture-handler";
import InputPlace from "../components/InputPlace/InputPlace";
import ButtonMain from "../components/Shared/ButtonMain/ButtonMain";
import IconTrash from "../assets/svg/trash.svg";
import { useState } from "react";

export default function CreatePostsScreen() {
  function Toolbar() {
    const postInitialState = { title: "", locality: "", photo: "" };
    const [post, setPost] = useState(postInitialState);
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.form}>
          <PostPicture
            imgUrl={
              "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692381429/postImages/Rectangle_23_khco9w.jpg"
            }
          />
          <TextInput
            style={styles.inputTitle}
            placeholder="Назва..."
            value={post.value}
            onChangeText={(value) =>
              setPost((prev) => {
                return { ...prev, title: value };
              })
            }
          />
          <InputPlace />
          <View style={styles.btnWrapper}>
            <ButtonMain
              title={"Опубліковати"}
              disabled={true}
              onPress={() =>
                alert(
                  `Publish title:${post.title}, place:${post.locality}, photo:${post.photo}`
                )
              }
            />
          </View>
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

          if (route.name === "Toolbar") {
            // iconName = focused ? "ios-list-circle" : "ios-list";
            // return <Ionicons name={iconName} size={size} color={color} />;
            return (
              <ToolbarBtn disabled={true}>
                <IconTrash style={{ width: 24, height: 24 }} />
              </ToolbarBtn>
            );
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
      {/* <Tabs.Screen name="Grid" component={Grid} /> */}
      <Tabs.Screen name="Toolbar" component={Toolbar} />
      {/* <Tabs.Screen name="User" component={User} /> */}
    </Tabs.Navigator>
  );
}
const styles = StyleSheet.create({
  form: {},
  inputTitle: {
    borderColor: colors.inputBorderColor,
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginTop: 32,
    fontSize: 16,
    color: colors.mainTextColor,
    fontWeight: "500",
  },
  btnWrapper: { marginTop: 32 },
});

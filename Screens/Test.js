import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function Settings() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <View style={styles.container}>
        <Text>Test!! Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text>Registration</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Login", { sessionId: 45, userId: "22e24" })
          }
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("PostScreen")}>
          <Text>PostScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AddPost")}>
          <Text>CreatePostScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
          <Text>CommentsScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Text>ProfileScreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}
const Tabs = createBottomTabNavigator();
const Test = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-circle" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
      //   tabBarOptions={{
      //     activeTintColor: "tomato",
      //     inactiveTintColor: "gray",
      //   }}
    >
      <Tabs.Screen name="Settings" component={Settings} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Test;

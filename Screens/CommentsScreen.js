import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PostPhoto from "../components/Posts/PostPhoto";
import CommentsItem from "../components/Comments/CommentItem";
import CommentsAddForm from "../components/Comments/CommentsAddForm";
const comments = [
  {
    id: 1,
    authorAvatar:
      "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692363869/avatar/avatar_a8vxal.jpg",
    content:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    date: "09 червня, 2020 | 08:40",
  },
  {
    id: 2,
    authorAvatar:
      "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692363869/avatar/avatar_a8vxal.jpg",
    content:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    date: "09 червня, 2020 | 09:14",
  },
  {
    id: 3,
    authorAvatar:
      "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692363869/avatar/avatar_a8vxal.jpg",
    content: "Thank you! That was very helpful!",
    date: "09 червня, 2020 | 09:20",
  },
];
export default function CommentsScreen() {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 32 }}>
        <PostPhoto
          imgUrl={
            "https://res.cloudinary.com/dwad7k3ud/image/upload/v1692381429/postImages/Rectangle_23_khco9w.jpg"
          }
        />
      </View>
      <ScrollView>
        {comments.map((comment, index) => (
          <CommentsItem
            key={comment.id}
            isEven={index % 2 === 0}
            comment={comment}
          />
        ))}
      </ScrollView>
      <CommentsAddForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

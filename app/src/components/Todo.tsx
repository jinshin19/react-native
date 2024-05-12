import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Style";

type TodoType = {
  navigation: any;
  id: string;
  title: string;
  description: string;
};

const text =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum sint explicabo iusto error adipisci atque animi fuga dignissimos. In placeat accusantium non error possimus. Veniam esse repudiandae sapiente vitae hic?";

export default function Todo({ navigation, id, title, description }: TodoType) {
  const todoHandler = () =>
    navigation.navigate("Details", {
      id,
      title,
      description,
    });
  return (
    <TouchableOpacity onPress={todoHandler} style={styles.todos}>
      <View>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.description}>
          {description.substring(0, 80)} ...
        </Text>
      </View>
    </TouchableOpacity>
  );
}

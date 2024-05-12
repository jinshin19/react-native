import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import Todo from "../components/Todo";
import { styles } from "../../Style";
import axios from "axios";

const mockData = {
  id: "1",
  title: "test",
  description: "Test",
};

export default function Index({ navigation }: any) {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addTodoHandler = async () => {
    try {
      const request = await axios.post('http://192.168.43.13:5000/todos', { title, description: desc})
      const response = await request.data
      console.log(response)
      fetchData()
    } catch (error) {
      console.log(error)
    }
    setModal(false);
  };

  const fetchData = async () => {
    try {
      const request = await axios.get("http://192.168.43.13:5000/todos");
      const response = await request.data;

      setItems(response?.data);
    } catch (error) {
      error && console.log(error);
    }
  };
  useEffect(() => {
    
    fetchData();
  }, [setItems, fetchData]);
 //tes
  return (
    <View>
      <Modal
        style={styles.modal}
        onRequestClose={() => setModal(false)}
        visible={modal}
        transparent={true}
      >
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}> Title </Text>
              <TextInput placeholder="Title..." style={styles.modalInput} onChangeText={setTitle} value={title} />
            </View>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}> Description </Text>
              <TextInput
                style={{ backgroundColor: "white", height: 100, padding: 10 }}
                multiline
                textAlignVertical="top"
                placeholder="Description..."
                onChangeText={setDesc}
                value={desc}
              />
            </View>
            <View style={styles.modalView}>
              <Button title="Add new todo" onPress={() => addTodoHandler()} />
            </View>
          </View>
        </View>
      </Modal>
      <View>
        <View style={styles.addTodoWrapper}>
          <TouchableOpacity
            style={styles.addTodoButton}
            onPress={() => setModal(true)}
          >
            <Text style={styles.addTodoText}> Add Todo </Text>
          </TouchableOpacity>
        </View>
        {items && (
          <FlatList
            data={items}
            renderItem={({ item }: any) => (
              <Todo navigation={navigation} {...item} />
            )}
            keyExtractor={(item: any) => item?.id}
            numColumns={3}
          />
        )}
      </View>
    </View>
  );
}

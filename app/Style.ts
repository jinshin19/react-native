import { Modal, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },
  modalWrapper: {
    marginTop: 80,
    width: "100%",
    padding: 10,
  },
  modal: {
    padding: 10,
    backgroundColor: "black",
  },
  modalView: {
    marginVertical: 10,
  },
  modalTitle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 10,
  },
  modalInput: {
    padding: 10,
    backgroundColor: "white",
  },
  addTodoWrapper: {
    padding: 10,
    marginTop: 10,
  },
  addTodoButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    elevation: 3,
  },
  addTodoText: {
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "white",
  },
  todos: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    minHeight: 10,
    maxHeight: 150,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "#f6f6f6",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },
  description: {
    fontSize: 16,
    textAlign: "center"
  },
});

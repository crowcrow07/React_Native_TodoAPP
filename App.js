import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";

import ListItem from "./components/ListItem";

export default function App() {
  const [enteredListText, setEnteredListText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function listInputHandler(enteredText) {
    setEnteredListText(enteredText);
  }

  function addListHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredListText, key: Date.now() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="한글도 괜찮죠?"
          onChangeText={listInputHandler}
        />
        <Button title="Add List" onPress={addListHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <ListItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  listContainer: {
    flex: 5,
  },
  listItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
});

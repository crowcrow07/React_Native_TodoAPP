import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";

export default function App() {
  const [modalIsVisible, setModalIsVisiable] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddListHandler() {
    setModalIsVisiable(true);
  }

  function addListHandler(enteredListText) {
    if (!enteredListText.trim()) return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredListText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((item) => item.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New List"
        color="#5e0acc"
        onPress={startAddListHandler}
      />
      <ListInput onAddList={addListHandler} visible={modalIsVisible} />
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <ListItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
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
  listContainer: {
    flex: 5,
  },
});

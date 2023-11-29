import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addListHandler(enteredListText) {
    if (!enteredListText.trim()) return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredListText, key: Date.now() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <ListInput addListHandler={addListHandler} />
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
  listContainer: {
    flex: 5,
  },
});

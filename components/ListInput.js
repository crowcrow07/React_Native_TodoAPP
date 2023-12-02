import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function ListInput({ onAddList }) {
  const [enteredListText, setEnteredListText] = useState("");

  function listInputHandler(enteredText) {
    setEnteredListText(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredListText}
        style={styles.textInput}
        placeholder="한글도 괜찮죠?"
        onChangeText={listInputHandler}
      />
      <Button
        title="Add List"
        onPress={() => {
          onAddList(enteredListText);
          setEnteredListText("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

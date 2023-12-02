import { StyleSheet, View, Text, Pressable } from "react-native";

export default function ListItem({ id, text, onDeleteItem }) {
  return (
    <Pressable onPress={() => onDeleteItem(id)}>
      <View style={styles.listItem}>
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
});

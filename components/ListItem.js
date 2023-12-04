import { StyleSheet, View, Text, Pressable } from "react-native";

export default function ListItem({ id, text, onDeleteItem }) {
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#481677" }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.listText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  listText: { color: "white", padding: 8 },
});

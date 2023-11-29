import { StyleSheet, View, Text } from "react-native";

export default function ListItem({ text }) {
  return (
    <View style={styles.listItem}>
      <Text style={{ color: "white" }}>{text}</Text>
    </View>
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

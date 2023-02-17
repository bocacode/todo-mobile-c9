import { Text, View, StyleSheet, Button } from "react-native";

export default function TaskCard({ data, setTasks }) {
  const { task, done, tasksID } = data;
  const handleDelete = () => {
    fetch(`https://todo-c9-api-bc.web.app/tasks/${tasksID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(setTasks)
      .catch(console.error);
  }
  return (
    <View style={styles.taskCardContainer}>
      <Text style={done ? styles.textColorDone : styles.textColor}>
        {task}</Text>
      <Button
        title="Delete"
        color="#202020"
        accessibilityLabel="Delete"
        onPress={handleDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
  },

  taskCardContainer: {
    backgroundColor: "#4080B0",
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 8,
    borderColor: "#204060",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textColor: {
    fontSize: 20,
    color: "#FFFFFF",
    textTransform: "capitalize",
  },

  textColorDone: {
    fontSize: 20,
    color: "#404040",
    textTransform: "capitalize",
    textDecorationLine: "line-through",
  },
});

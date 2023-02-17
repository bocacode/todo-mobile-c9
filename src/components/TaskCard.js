import { Text, View, Button } from "react-native";
import { styles } from "../../styles";

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

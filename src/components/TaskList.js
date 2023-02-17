import { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import TaskCard from "./TaskCard";
import { styles } from "../../styles";

export default function TaskList({ tasks, setTasks }) {
  useEffect(() => {
    fetch("https://todo-c9-api-bc.web.app/tasks")
      .then((res) => res.json())
      .then(setTasks)
      .catch(console.error);
  }, []);
  const toggleDone = (task) => {
    const done = !!!task.done; // true, false, undefined
    fetch(`https://todo-c9-api-bc.web.app/tasks/${task.tasksID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done }),
    })
      .then((res) => res.json())
      .then(setTasks)
      .catch(console.error);
  };
  return (
    <ScrollView style={styles.scrollView}>
      {!tasks ? (
        <Text>Loading ...</Text>
      ) : (
        tasks.map((element) => (
          <TouchableOpacity
            onPress={() => toggleDone(element)}
            key={element.tasksID}
          >
            <TaskCard data={element} setTasks={setTasks} />
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
}

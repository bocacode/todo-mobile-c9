import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const [tasks, setTasks] = useState();

  // fetch task in UseEffect
  useEffect(() => {
    fetch("https://todo-c9-api-bc.web.app/tasks")
      .then((res) => res.json())
      .then(setTasks)
      .catch(console.error);
  }, []);

  const toggleDone = (task) => {
    const done = !!!task.done; // true, false, undefined
    // we need to send a patch request to `/tasks/${task.tasksID}`
    // in the body we need to send { done }
    fetch(`https://todo-c9-api-bc.web.app/tasks/${task.tasksID}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ done }),
    })
        .then(res => res.json())
        .then(setTasks)
        .catch(console.error);
  };

  return (
    <ScrollView>
      <Text style={styles.h1}>To Do List</Text>
      {!tasks ? (
        <Text>Loading ...</Text>
      ) : (
        tasks.map((element) => (
          <TouchableOpacity
            onPress={() => toggleDone(element)}
            key={element.tasksID}
          >
            <TaskCard data={element} />
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
  },

  h1: {
    fontSize: 30,
    fontWeight: "700",
    display: "Flex",
    textAlign: "center",
  },
});

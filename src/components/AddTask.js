import React, { useState } from "react"; // Line not required
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddTask({ setTasks }) {
  // const {setTasks} = props
  const [task, setTask] = useState("");

  const handleAddNewTask = () => {
    const newTask = {
      done: false,
      task: task,
    };

    fetch(`https://todo-c9-api-bc.web.app/tasks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then(setTasks)
      .catch(console.error);
  };
  return (
    <>
      <View>
        <Text>Add New Task</Text>
        <TextInput style={styles.input} value={task} onChangeText={setTask} />
        <Button title="Press This" onPress={handleAddNewTask} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

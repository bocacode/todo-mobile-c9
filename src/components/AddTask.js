import React, { useState } from "react"; // Line not required
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function AddTask({ setTasks }) {
  const [task, setTask] = useState("");

  const handleAddNewTask = () => {
    const newTask = {
      done: false,
      task: task,
    };
    setTask('')
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
      <View style={styles.container}>
        <TextInput style={styles.input} value={task} onChangeText={setTask} />
        <Pressable style={styles.button} onPress={handleAddNewTask}>
          <Text style={styles.text}>Add</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#d0d0d0",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    display: 'inline',
    width: "64%",
    backgroundColor: "#fff",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#109910',
    display: 'inline',
    width: "25%",
    height: 44,
    margin: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

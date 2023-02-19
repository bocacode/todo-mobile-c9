import { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import AddTask from "./src/components/AddTask";
import TaskList from "./src/components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState();
  const [taskCount, setTaskCount] = useState(0);
  useEffect(() => {
    setTaskCount(tasks?.length || 0)
  }, [tasks])
  return (
      <SafeAreaView style={{ backgroundColor: "#102030" }}>
        <StatusBar style="light" />
        <Text style={{ color: 'white', textAlign: 'center'}}>{taskCount} Tasks</Text>
        <AddTask setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </SafeAreaView>
  );
}


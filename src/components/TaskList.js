import { ScrollView, Text, StyleSheet } from "react-native";
import {useState, useEffect} from "react";
import TaskCard from "./TaskCard";

export default function TaskList() {
    const [tasks, setTasks] = useState();

    // fetch task in UseEffect
    useEffect(() => {
        fetch('https://todo-jsohndata-api.web.app/tasks')
          .then(res => res.json())
          .then(setTasks)
          .catch(console.error)
      }, [])

    return(
        <ScrollView>            
            <Text style={styles.h1}>To Do List</Text>
            {
            !tasks 
            ? <Text>Loading ...</Text>
            : tasks.map( (element) => (

                <TaskCard 
                    key={element.tasksID}
                    data={element}
                />
            ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: 'center'
    },

    h1: {
        fontSize: 30,
        fontWeight: "700",
        display: "Flex",
        textAlign: "center"
    }
})
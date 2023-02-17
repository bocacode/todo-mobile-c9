/* 
npm install @react-navigation/native
npm install @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
*/
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import TaskList from "./src/components/TaskList";

const Stack = createNativeStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState();

  return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Todo List" 
            component={TaskList} 
            tasks={tasks} 
            setTasks={setTasks} />
          {/* <Stack.Screen name="Details" component={Details} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

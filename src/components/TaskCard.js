import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";


export default function TaskCard( {data} ) {
    const {task} = data;

    return (
        
            <View style={styles.taskCardContainer}>
                <Text style={styles.textColor}>{task}</Text>

                <TouchableOpacity>
                    <Button 
                        title="Delete"
                        color="#ffffff"
                        accessibilityLabel="Delete This"                        
                        style={styles.button} />
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        justifyContent: 'center'
    },

    taskCardContainer: {
        backgroundColor: '#FF69B4',
        padding: 20,
        margin: 5

    },

    button: {
        backgroundColor: '#000000',
    },

    textColor: {
        fontSize: 20,
        color: '#FFFFFF',
        textTransform: "capitalize"

    }
})
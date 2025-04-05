import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        },
        titulo: {
            fontSize: 30,
            color: 'red',
            fontWeight: 'bold',
        },
        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            borderRadius: 8,
            marginBottom: 10,
        },
        resultado: {
            fontSize: 24,
            color: 'green',
            textAlign: 'center',
            marginTop: 20,
        }
})
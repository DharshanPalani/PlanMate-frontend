import { StyleSheet } from "react-native";

const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    input: {
        width: 250,
        height: 40,
        borderBottomWidth: 1,
        marginBottom: 20,
        padding: 5
    },
});

export default formStyles;

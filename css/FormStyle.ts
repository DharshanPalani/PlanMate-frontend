import { StyleSheet } from "react-native";

const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F698C',
        paddingHorizontal: 20,
    },
    card: {
        width: '90%',
        maxWidth: 400,
        padding: 30,
        backgroundColor: '#EAE7DC',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: "#0D0D0D",
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 2,
        borderColor: "#BFAD54",
        marginBottom: 15,
        paddingHorizontal: 15,
        color: "#0D0D0D",
        fontSize: 18,
        backgroundColor: "#F8F8F8",
        borderRadius: 12,
    },
    button: {
        backgroundColor: "#BFAD54",
        paddingVertical: 14,
        width: '100%',
        borderRadius: 12,
        alignItems: "center",
        marginTop: 15,
    },
    buttonText: {
        color: "#0D0D0D",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});

export default formStyles;

import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
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
        padding: 25,
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
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: "#0D0D0D",
    },
    button: {
        width: '100%',
        paddingVertical: 14,
        backgroundColor: "#BFAD54",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 15,
    },
    buttonText: {
        color: "#0D0D0D",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});

export default homeStyle;

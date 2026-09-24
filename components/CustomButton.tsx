import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: () => void;
};

export default function CustomButton({ title, onPress }: CustomButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText} >{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#7B1FA2",
        borderRadius: 24,
        paddingHorizontal: 30,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 14
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#ffffff",
    }
})
import { StyleSheet, Text, View } from "react-native"

export default function Footer() {
    return (
       
        < View style = { styles.footer } >
            <Text style={styles.footerText}>Açai Prime • O sabor autêntico da Amazônia</Text>
                </View >
    
    )
}
const styles = StyleSheet.create({
    footer: {
        padding: 20,
        alignItems: "center",
        marginBlock: 20
    },
    footerText: {
        fontSize: 11,
        color: "#6C757D",
        fontWeight: '500',
        textAlign: "center"
    }

})
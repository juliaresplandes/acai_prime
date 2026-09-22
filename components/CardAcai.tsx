import { Ionicons } from "@expo/vector-icons";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

type CardAcaiProps = {
    img: ImageSourcePropType;
    name: string;
    description: string;
    price: string;
};


export default function CardAcai({ img, name, description, price }: CardAcaiProps) {
    return (
        <View style={styles.cardItem}>
            <Image source={img} style={styles.cardImg}></Image>
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.cardDescripition}>{description}</Text>
            <View style={styles.cardAddIcon}>
                <Text style={styles.cardPrice}>R${price}</Text>
                <Ionicons style={styles.cardIcon} name="add-outline" size={24} color="white" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardItem: {
        width: "47%",
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        elevation: 3,
        marginBottom: 16,
        marginTop:12
    },
    cardImg: {
        borderRadius:8
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2C1B30",
        paddingTop: 10
    },
    cardDescripition: {
        fontSize: 12,
        color: "##644D6A",
        marginTop: 4,
        fontWeight: '400',
        lineHeight: 16
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: "800",
        color: "#7B1FA2",
        marginTop: 12
    },
    cardAddIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardIcon: {
        backgroundColor: '#7B1FA2',
        borderRadius: 14,
        padding: 2

    }


})
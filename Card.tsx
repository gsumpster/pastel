import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';


// import { CheckCircle, Circle } from 'react-native-feather'; // @ts-ignore

export default function Card() {
    const [done, setDone] = useState(false);

    return (
        <TouchableOpacity onPress={() => Haptics.selectionAsync().then(() => setDone(!done))} activeOpacity={.8} style={styles.container}>
            <View style={styles.icon}>{done ? <Feather size={28} name="check-circle" color="#fff" /> : <Feather size={28} name="circle" color="#fff" />}</View>
            <Text style={styles.title}>Breakfast</Text>
            <Text style={styles.body}>Fed at <Text style={styles.bodyBold}>7:20 AM</Text></Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 150,
        marginHorizontal: 6,
        borderRadius: 8,
        backgroundColor: '#5ABDBE',
        justifyContent: "flex-end",
        padding: 16
    },
    icon: {
        position: "absolute",
        top: 16,
        left: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    body: {
        fontSize: 10,
        color: "#fff",
    },
    bodyBold: {
        fontSize: 10,
        color: "#fff",
        fontWeight: "bold"
    }
});

import React , {useEffect, useState} from "react";
import {View, Text, StyleSheet} from "react-native";

const Location = (props) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemLocation}>{props.location}</Text>
            <Text style={styles.itemText}>Type: {props.type}</Text>
            <Text style={styles.itemText}>Dimension: {props.dimension}</Text>
            <Text style={styles.itemText}>Resident Count: {props.resCount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#D7DBDB',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    itemLocation: {
        fontSize: 25,
    },
    itemText: {
        maxWidth: '80%',
    },
});

export default Location;
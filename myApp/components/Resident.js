import React , {useEffect, useState} from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const Resident = (props) => {
    return (
        <View style={styles.item}>
            <Image style={{width: 150, height: 150}} source={{uri: props.resident.image}}/>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{props.resident.name}</Text>
            <Text style={{textAlign: 'center'}}>Species: {props.resident.species}</Text>
            {(props.resident.type)? <Text style={{textAlign: 'center'}}>Type: {props.resident.type}</Text> : <></>}
            <Text style={{textAlign: 'center'}}>Gender: {props.resident.gender}</Text>
            <Text style={{textAlign: 'center'}}>Origin: {props.resident.origin.name}</Text>
            <Text style={{textAlign: 'center'}}>Status: {props.resident.status}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width: '48%',
        alignItems: 'center',
        borderWidth: 0.75,
        borderRadius: 30,
        borderColor: '#DED8D8',
        margin: '1%',
        padding: 15,
        backgroundColor: '#DED8D8',
    },
});

export default Resident;
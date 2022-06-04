import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle} >
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoParent}>
                <View style={styles.viewTwoStyle}></View>
            </View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    parentStyle: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200

    },
    viewTwoParent: {justifyContent: 'flex-end'},
    viewOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'lightcoral',
        width: 100,
        height: 100,

    },
    viewTwoStyle: {
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'lightgreen',
        width: 100,
        height: 100,


    },
    viewThreeStyle: {
        borderWidth: 3,
        borderColor: 'purple',
        backgroundColor: 'orchid',
        width: 100,
        height: 100,



    },
})

export default BoxScreen

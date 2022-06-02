import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComponentsScreen = () => {
    const name = 'Владимир';

  return (
    <View>
      <Text style={styles.textStyle}>Да започваме с ReactNative</Text>
      <Text style={styles.textStyleSmall}>Казвам се {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    textStyleSmall: {
        fontSize: 25
    }
})

export default ComponentsScreen
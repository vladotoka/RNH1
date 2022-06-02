import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const ColorCounter = ({ color, onIncrease, onDecrease, disableIncrease, disableDecrease }) => {
	return (
		<View>
			<Text>{color}</Text>
			<Button title={`повече ${color}`} onPress={onIncrease} disabled={disableIncrease}/>
			<Button title={`по-малко ${color}`} onPress={onDecrease} disabled={disableDecrease}/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ColorCounter;

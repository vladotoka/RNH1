import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const TextScreen = () => {
	const [textInput, setTextInput] = useState('');
	const inputHandler = (inputText) => { setTextInput(inputText) };

	return (
		<View>
			<Text>Въведи име</Text>
			<TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} placeholder="име" onChangeText={inputHandler} />
			<Text>{textInput}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
});

export default TextScreen;

import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const TextScreen = () => {
	const [password, setPassword] = useState('');
	const inputHandler = (inputText) => { setPassword(inputText) };

	return (
		<View>
			<Text>Въведи парола</Text>
			<TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={password} placeholder="име" onChangeText={inputHandler} />
			{password.length < 5 && <Text>Паролата трябва да е поне 5 символа ^^</Text>}
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

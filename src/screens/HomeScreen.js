import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Хоум скрийн</Text>
			<Button
				title="Към демо компоненти"
				onPress={() => {
					navigation.navigate('Components');
				}}
			/>
			<Button
				onPress={() => {
					navigation.navigate('List');
				}}
				title="Към демо текст"
			/>
			<Button
				onPress={() => {
					navigation.navigate('Image');
				}}
				title="Към демо изображения"
			/>
			<Button
				onPress={() => {
					navigation.navigate('Counter');
				}}
				title="Към демо брояч"
			/>
			<Button
				onPress={() => {
					navigation.navigate('Color');
				}}
				title="Към демо цветове"
			/>
			<Button
				onPress={() => {
					navigation.navigate('Square');
				}}
				title="Към демо квадрат"
			/>
			<Button
				onPress={() => {
					navigation.navigate('Text');
				}}
				title="Към демо текст"
			/><Button
			onPress={() => {
				navigation.navigate('Box');
			}}
			title="Към демо box"
		/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;

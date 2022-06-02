import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ImageDetail = ({ imageSource, title, score }) => {
	return (
		<View>
			<Image source={imageSource} />
			<Text>{title}</Text>
			<Text>score: {score}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;

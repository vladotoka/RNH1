import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail
				title="Гора"
				imageSource={require('../../assets/forest.jpg')}
                score = {9}
			/>
			<ImageDetail
				title="Плаж"
				imageSource={require('../../assets/beach.jpg')}
                score = {4}
			/>
			<ImageDetail
				title="Планина"
				imageSource={require('../../assets/mountain.jpg')}
                score = {8}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;

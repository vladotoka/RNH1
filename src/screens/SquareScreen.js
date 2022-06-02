import { StyleSheet, Text, View } from 'react-native';
import React, { useReducer } from 'react';

import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
	//state === {red: number, green: number, blue: number}
	//action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

	switch (action.type) {
		case 'change_red':
			return { ...state, red: state.red + action.payload };
		case 'change_green':
			return { ...state, green: state.green + action.payload };
		case 'change_blue':
			return { ...state, blue: state.blue + action.payload };

		default:
			return state;
	}
};

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	const { red, green, blue } = state;
	console.log(state);
	return (
		<View>
			<ColorCounter
				color="Червено"
				disableIncrease={red + COLOR_INCREMENT > 255 ? true : false}
				disableDecrease={red - COLOR_INCREMENT < 0 ? true : false}
				onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
				onDecrease={() =>
					dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
				}
			/>
			<ColorCounter
				color="Зелено"
				disableIncrease={green + COLOR_INCREMENT  > 255 ? true : false}
				disableDecrease={green - COLOR_INCREMENT < 0 ? true : false}
				onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
				onDecrease={() =>
					dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
				}
			/>
			<ColorCounter
				color="Синьо"
				disableIncrease={blue + COLOR_INCREMENT  > 255 ? true : false}
				disableDecrease={blue - COLOR_INCREMENT < 0 ? true : false}
				onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
				onDecrease={() =>
					dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
				}
			/>
			<View
				style={{
					height: 150,
					width: 150,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
				}}
			></View>
			<Text>RGB: {red},{green},{blue}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;

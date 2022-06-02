import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useReducer } from 'react';

const COUNTER_CHANGE_STEP = 1;
const reducer = (state, action) => {
	//state === {counterValue: number}
	//action === { type: 'increment' || 'decrement', payload: 1 }

	switch (action.type) {
		case 'increment':
			return { ...state, counterValue: state.counterValue + action.payload };

		case 'decrement':
			return { ...state, counterValue: state.counterValue - action.payload };

		default:
			return state;
	}
};

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { counterValue: 0 });

	const counterDecrease = () => dispatch({ type: 'decrement', payload: COUNTER_CHANGE_STEP });
	const counterIncrease = () => dispatch({ type: 'increment', payload: COUNTER_CHANGE_STEP });

	return (
		<View>
			<Button title="Увеличи" onPress={counterIncrease} />
			<Button title="Намали" onPress={counterDecrease} />
			<Text>Текуща стойност: {state.counterValue}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;

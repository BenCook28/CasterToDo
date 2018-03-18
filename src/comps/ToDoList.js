import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView
} from 'react-native';

import TodoItem from './TodoItem';

export default class ToDoList extends Component {
	
	render () {
		const items = [
			"1. Go to the store",
			"2. Get the kale",
			"3. Bring it back"
		]

		const thirdTask = "Bring it back";
		return (
			<View style={styles.container}>
	        <Text style={styles.header}>
	          To Do List
	        </Text>
	        <ScrollView style={styles.content}>
	        	{
	        		items.map((item, index) => {
	        			return <TodoItem title={item} key={index}/>
	        		})
	        	}
	        </ScrollView>
	      </View>	
		)
	}

}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
	},
	header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
	content: {
		flex: 1,
		alignSelf: 'stretch'
	}
})
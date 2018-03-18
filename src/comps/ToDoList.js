import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList
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
			<View style={{flex: 1, backgroundColor: 'white'}}>
	        <Text style={styles.header}>
	          To Do List
	        </Text>
	        <FlatList
	        	data={items}
	        	style={styles.content}
	        	renderItem={(row) => {
	        		return <TodoItem title={row.item} />
	        	}}
	        	keyExtractor={item => item}
	        />
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
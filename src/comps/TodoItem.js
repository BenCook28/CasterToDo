import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';

export default class TodoItem extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			completed: props.title == '1. Go to the store'
		}
	}

	toggleTodo = () => {
		this.setState({ completed: !this.state.completed })
	}

	render() {
		return (
			<TouchableOpacity onPress={this.toggleTodo}>
			  <Text style={[styles.item, {
			  	backgroundColor: (this.state.completed ? 'grey' : 'transparent')
			  }]}>
			  	{this.props.title}
			  </Text>
		  </TouchableOpacity>
		)
	}

}

const styles = StyleSheet.create({
	item: {
	    padding: 10
	}
})
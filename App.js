

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ToDoList from './src/comps/ToDoList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ToDoList />
    );
  }
}

const styles = StyleSheet.create({
  
});

import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
} from 'react-native';

export default class EventList extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    const books = require('./db.json').books
    this.setState( { books })
  }

  render() {
    return(
      <FlatList
        data={ this.state.books }
        style={ styles.list }
        renderItem={ ({ item }) => 
          <View style={styles.container}>
            <Text>{ item.title }</Text>
          </View>
        }
        keyExtractor={ item => item.id }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3'
  },
});

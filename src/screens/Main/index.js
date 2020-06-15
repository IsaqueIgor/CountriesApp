import React, { Component } from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';

import Search from '../../components/SearchSuggestions';
import styles from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Search />
        </View>
      </View>
    );
  }
}

import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Suggestions from './Suggestions';
import axios from 'axios';

const API_URL = 'https://restcountries.eu/rest/v2/';

export default class Search extends Component {
  state = {
    query: '',
    results: [],
  };

  getInfo = () => {
    axios.get(`${API_URL}/name/${this.state.query}`).then(({ data }) => {
      console.log(data);
      this.setState({
        results: data.data,
      });
    });
  };

  HandleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search for...'
          ref={(input) => (this.search = input)}
          onChange={this.HandleInputChange}
        />
        <Suggestions results={this.state.results} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchInput: {
    paddingLeft: 8,
    height: 46,
    borderRadius: 22,
    backgroundColor: '#FFF',
  },
});

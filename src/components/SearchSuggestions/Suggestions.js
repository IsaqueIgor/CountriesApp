import React from 'react';
import { Text, FlatList } from 'react-native';

const Suggestions = (props) => {
  const options = props.results.map((r) => <Text key={r.id}>{r.name}</Text>);
  return <FlatList style={{ margin: 40 }} renderItem={options} />;
};

export default Suggestions;

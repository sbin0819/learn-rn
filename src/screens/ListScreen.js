import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friends #1', age: 20 },
    { name: 'Friends #2', age: 21 },
    { name: 'Friends #3', age: 22 },
    { name: 'Friends #4', age: 23 },
    { name: 'Friends #5', age: 24 },
    { name: 'Friends #6', age: 25 },
    { name: 'Friends #7', age: 26 },
    { name: 'Friends #8', age: 27 },
  ];

  return (
    <FlatList
      keyExtractor={(frined) => frined.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;

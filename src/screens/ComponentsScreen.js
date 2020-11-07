import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const friends = [
    { name: 'Components #1', age: 20 },
    { name: 'Components #2', age: 21 },
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
    fontSize: 30,
    marginVertical: 50,
  },
});

export default ComponentsScreen;

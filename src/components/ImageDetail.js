import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const IamgeDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>show image of {title}</Text>
      <Text>image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IamgeDetail;

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Statistics = () => {
  return (
    <View style={styles.body}>
      <Text>Statistics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffffff",
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
});

export default Statistics;
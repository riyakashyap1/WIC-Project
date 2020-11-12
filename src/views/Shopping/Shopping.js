import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Shopping = () => {
  return (
    <View style={styles.body}>
      <Text>Shopping</Text>
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

export default Shopping;
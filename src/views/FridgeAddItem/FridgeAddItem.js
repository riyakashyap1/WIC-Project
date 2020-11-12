import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const FridgeAddItem = () => {
  return (
    <View style={styles.body}>
      <Text>What would you like to add? 🥦</Text>
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

export default FridgeAddItem;
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Recipes = () => {
  return (
    <View style={styles.body}>
      <Text>Recipes</Text>
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

export default Recipes;
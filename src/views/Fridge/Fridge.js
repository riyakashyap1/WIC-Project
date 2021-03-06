import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const Fridge = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Text>Fridge</Text>
      <Button
        title="Add Item to Fridge"
        onPress={() => navigation.navigate('FridgeAddItem')}
      />
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

export default Fridge;
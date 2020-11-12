import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.body}>
      <Text>Profile</Text>
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

export default Profile;
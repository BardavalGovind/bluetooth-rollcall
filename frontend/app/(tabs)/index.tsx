import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://192.168.129.218:5000/')  // Use your actual laptop IP here
      .then(res => res.text())
      .then(text => setMessage(text))
      .catch(err => setMessage('Error fetching data'));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message || 'Loading...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});

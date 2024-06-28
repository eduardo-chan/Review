import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Input, Image } from '@rneui/base';

export default function FormLogin() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/carsishop-60e8f.appspot.com/o/images-products%2F33ef818f-c678-46fc-aa92-c70478d4991a.jpg?alt=media&token=14aa6958-f6ee-4aaf-921e-4df4156ad1f0' }}
        style={{width: 100, height: 100, marginBottom: 16}}
      />
      <Input
        placeholder='User'
        label='User'
        labelStyle={{marginBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color: '#f3f3f3',
  },
});

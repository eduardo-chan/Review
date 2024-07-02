import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Input, Image, Icon } from '@rneui/base';
import { set } from "lodash";

export default function FormLogin() {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [showPassword, setShowPassword] = useState(true)
  const [error, setError] = useState({username: '', passwordError: ''})

  console.log("ya entro?")
  console.log("username: ", username)
  console.log("password: ", password)

  if (isEmpty(username) || isEmpty(password)) {
    setError({usernameError: 'el usuario es requerido', passwordError: 'la contraseña es requerida'})
  } else {
    setError({usernameError: '', passwordError: ''})
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/carsishop-60e8f.appspot.com/o/images-products%2F33ef818f-c678-46fc-aa92-c70478d4991a.jpg?alt=media&token=14aa6958-f6ee-4aaf-921e-4df4156ad1f0' }}
        style={{width: 100, height: 100, marginBottom: 16}}
      />
      <Input
        placeholder='User'
        label='User'
        labelStyle={styles.label}
        style={{marginBottom: 16 }}
        errorMessage={error.usernameError}
      />
      <input
        placeholder='********'
        label='Password'
        labelStyle={styles.label}
        style={{marginBottom: 16 }}
        secureTextEntry={true}
        rightIcon={
          <Icon
            name={showPassword ? "eye-off" : "eye"}
            type="material-community"
            onPress={() => setShowPassword(!showPassword)}
          />  
        }
        onChangeText={event => setPassword(event)}
        errorMessage={error.passwordError}
      />
      <Button
        tittle={"Login"}
        containerStyle={{width: "80%", borderColor: 'green', borderWidth: 1, borderRadius: 16 }}
        color={"white"}
        tittleStyle={{ color: "green "}}
        icon={<Icon name="login" type="material-community" color="green" />}
        iconPosition="left"
        onPress={login}
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
    color: 'green',
  },
});

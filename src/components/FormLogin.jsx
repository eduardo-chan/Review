import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Image, Input, Icon } from "@rneui/base";
import { isEmpty } from "lodash";

export default function FormLogin() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const [error, seterror] = useState({usernameError: "", passwordError: ""})

  const login = () => {
    console.log("ya entró?")
    console.log("Username: ", username);
    console.log("Password: ", password);
    if(isEmpty(username) || isEmpty(password)){
      seterror({usernameError: "Requerido", passwordError: "Requerido"})
    } else {
      seterror({usernameError: "", passwordError: ""})
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/carsishop-60e8f.appspot.com/o/images-products%2F33ef818f-c678-46fc-aa92-c70478d4991a.jpg?alt=media&token=14aa6958-f6ee-4aaf-921e-4df4156ad1f0' }}
        style={{ height: 100, width: 100, marginVertical: 20 }}
      />
      <Input
        placeholder="Usuario"
        label="Usuario"
        labelStyle={styles.label}
        containerStyle={{ marginBottom: 16 }}
        onChangeText={(username) => setUsername(username)}
        errorMessage={error.usernameError}
      />
      <Input
        placeholder="********"
        label="Contraseña"
        labelStyle={styles.label}
        containerStyle={{ marginBottom: 16 }}
        secureTextEntry={showPassword}
        rightIcon={
          <Icon
            name={showPassword ? "eye-off" : "eye"}
            type="material-community"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChangeText={(password) => setPassword(password)}
        errorMessage={error.passwordError}
      />
      <Button
        onPress={login}
        title={"Iniciar sesión"}
        titleStyle={{ color: "red" }}
        containerStyle={{
          width: "80%",
          borderColor: "red",
          borderWidth: 1,
          borderRadius: 16,
        }}
        color={"white"}
        iconPosition="left"
        icon={
          <Icon
            name="login"
            type="material-community"
            color={"red"}
            style={{ marginRight: 5 }}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 15,
    color: "#34fa",
  },
});
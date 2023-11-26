import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { router } from "expo-router";

const SignupScreen = () => {
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState();
  const [username, setUsername] = React.useState();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        router.replace("/Main");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <TextInput onChangeText={setUsername} keyboardType="default" />
      <Text>Email</Text>
      <TextInput onChangeText={setEmail} keyboardType="email-address" />
      <Text>Password</Text>
      <TextInput onChangeText={setPassword} keyboardType="visible-password" />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

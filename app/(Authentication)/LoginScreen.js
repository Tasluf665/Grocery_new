//https://medium.com/@adityasinghrathore360/implementing-firebase-authentication-in-react-native-app-with-expo-a-detailed-explanation-cea4d1113501
//https://blog.logrocket.com/integrating-firebase-authentication-expo-mobile-app/
//https://www.youtube.com/watch?v=ql4J6SpLXZA&t=1188s

import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import React from "react";
import { router, useNavigation } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginScreen = () => {
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState();
  const navigation = useNavigation();

  const handleSigin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigation.replace("Main");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text>Enter your Email and Password</Text>
      <Text>Email</Text>
      <TextInput onChangeText={setEmail} keyboardType="email-address" />
      <Text>Password</Text>
      <TextInput onChangeText={setPassword} keyboardType="visible-password" />
      <Button title="Sign In" onPress={handleSigin} />
      <Button title="Sign Up" onPress={() => router.push("/SignupScreen")} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

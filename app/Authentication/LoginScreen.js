import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        title="Sign Up"
        onPress={() => router.push("/Authentication/SignupScreen")}
      />
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

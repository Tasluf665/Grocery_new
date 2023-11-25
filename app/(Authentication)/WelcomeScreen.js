import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <Button
        title="Get Started"
        onPress={() => router.push("/AllLoginScreen")}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

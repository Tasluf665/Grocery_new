import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import Auth from "../../components/Auth";

const AllLoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Image</Text>
      <Text>Text</Text>
      <Button
        title="Number Input"
        onPress={() => router.push("/PhoneLoginScreen")}
      />
      <Button title="Email Login" onPress={() => router.push("/LoginScreen")} />
      <Auth />
    </View>
  );
};

export default AllLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

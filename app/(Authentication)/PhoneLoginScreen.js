import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const PhoneLoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PhoneLoginScreen</Text>
      <Button
        title="Enter Code"
        onPress={() => router.push("/PhoneCodeScreen")}
      />
    </View>
  );
};

export default PhoneLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

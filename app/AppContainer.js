import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function AppContainer() {
  let isAuth = false;
  let screenName = isAuth ? "/Main" : "/SplashScreen";
  return <Redirect href={screenName} />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

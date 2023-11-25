import { Stack } from "expo-router";

export default () => {
  return (
    <Stack initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" />
      <Stack.Screen name="WelcomeScreen" />
      <Stack.Screen name="AllLoginScreen" />
      <Stack.Screen name="PhoneLoginScreen" />
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="SignupScreen" />
      <Stack.Screen name="PhoneCodeScreen" />
    </Stack>
  );
};

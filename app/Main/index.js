import { Button, StyleSheet, Text, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { router } from "expo-router";

import { useDispatch } from "react-redux";
import { loging } from "../../redux/slices/Auth";

const index = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handelLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/WelcomeScreen");
    } catch (error) {
      Alert.alert("Error during logout:", error.message);
    }
  };

  if (!user) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <>
        <Text>User is logged in: {user ? user.email : ""}</Text>
        <Button
          title="Test"
          onPress={() => {
            return dispatch(loging());
          }}
        />
        <Button title="Logout" onPress={handelLogout} />
      </>
    );
  }
};

export default index;

const styles = StyleSheet.create({});

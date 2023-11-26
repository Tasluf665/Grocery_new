import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";

import { useDispatch } from "react-redux";
import { loging } from "../../redux/slices/Auth";

const index = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  if (user) {
    return (
      <>
        <div>User is logged in: {user.email}</div>
        <Button
          title="Test"
          onPress={() => {
            dispatch(loging());
          }}
        />
      </>
    );
  } else {
    return <div>User is not logged in</div>;
  }
};

export default index;

const styles = StyleSheet.create({});

//https://medium.com/@adityasinghrathore360/implementing-firebase-authentication-in-react-native-app-with-expo-a-detailed-explanation-cea4d1113501
//https://blog.logrocket.com/integrating-firebase-authentication-expo-mobile-app/
//https://www.youtube.com/watch?v=ql4J6SpLXZA&t=1188s

//--------------------------------------------------------

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import { router, useNavigation } from "expo-router";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

import Colors from "../../constant/Colors";
import customeFonts from "../../constant/customeFonts";
import PasswordTextInput from "../../components/PasswordTextInput";

export default function LoginScreen() {
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState();

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Email has beed send");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        Alert.alert("No user is found");
      } else if (err.code === "auth/missing-email") {
        Alert.alert("Please Enter a email address");
      } else {
        console.log(err.message);
      }
    }
  };

  const handleSigin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (!auth.currentUser.emailVerified) {
        await sendEmailVerification(auth.currentUser);
        Alert.alert(
          "Your Email is not verified. Please verify your email first"
        );
        await signOut(auth);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, marginTop: StatusBar.currentHeight }}
      behavior={"padding"}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/StartupImages/carrot.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Loging</Text>
          <Text style={[styles.text, { marginBottom: 40 }]}>
            Enter your emails and password
          </Text>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <PasswordTextInput title="Password" setPassword={setPassword} />

          <View style={styles.forgotContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => router.push("/SignupScreen")}
            >
              <Text style={styles.text}>New Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={handleForgotPassword}
            >
              <Text style={styles.text}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableNativeFeedback onPress={handleSigin}>
              <View style={styles.button}>
                <Text style={[styles.titelText]}>Log in</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    width: "70%",
    height: 60,
    overflow: "hidden",
    borderRadius: 20,
    marginTop: 30,
    alignSelf: "center",
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    backgroundColor: Colors.Primary,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.BorderGray,
    marginBottom: 20,
    fontFamily: customeFonts.Gilroy_Light,
    fontSize: 16,
    paddingVertical: 5,
  },
  imageContainer: {
    width: "100%",
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  itemContainer: {
    marginHorizontal: 20,
  },
  title: {
    fontFamily: customeFonts.Gilroy_Light,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontFamily: customeFonts.Gilroy_Light,
    fontSize: 16,
    marginBottom: 10,
    color: Colors.DarkGray,
  },
  titelText: {
    fontFamily: customeFonts.Gilroy_Light,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  forgotContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  passwordInputContainer: {
    flexDirection: "row",
  },
});

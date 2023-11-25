import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import customeFonts from "../constant/customeFonts";

const index = () => {
  const [fontsLoaded] = useFonts({
    Gilroy_ExtraBold: require("../assets/fonts/Gilroy/Gilroy_ExtraBold.otf"),
    Gilroy_Light: require("../assets/fonts/Gilroy/Gilroy_Light.otf"),
    Lato_Black: require("../assets/fonts/Lato/Lato-Black.ttf"),
    Lato_BlackItalic: require("../assets/fonts/Lato/Lato-BlackItalic.ttf"),
    Lato_Bold: require("../assets/fonts/Lato/Lato-Bold.ttf"),
    Lato_BoldItalic: require("../assets/fonts/Lato/Lato-BoldItalic.ttf"),
    Lato_Italic: require("../assets/fonts/Lato/Lato-Italic.ttf"),
    Lato_Light: require("../assets/fonts/Lato/Lato-Light.ttf"),
    Lato_LightItalic: require("../assets/fonts/Lato/Lato-LightItalic.ttf"),
    Lato_Regular: require("../assets/fonts/Lato/Lato-Regular.ttf"),
    Lato_Thin: require("../assets/fonts/Lato/Lato-Thin.ttf"),
    Lato_ThinItalic: require("../assets/fonts/Lato/Lato-ThinItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <Text style={{ fontFamily: customeFonts.Gilroy_ExtraBold }}>
        Gilroy_ExtraBold
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image
} from "react-native";


const BtnAllowComp = ({ imagen }) => {

  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.containerInto}>
      <Image
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        source={imagen}
        style={{ width: "100%" }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInto: {
    alignItems: "center",
    backgroundColor: "#248397",
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    paddingTop: 30,
  },
});

export default BtnAllowComp;

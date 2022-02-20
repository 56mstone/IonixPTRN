import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";


const BtnAllowComp = ({ title }) => {

  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        {title}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 30,
  },
  text: {
    color: "#999999",
  }
});

export default BtnAllowComp;

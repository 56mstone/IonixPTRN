import React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

const TextComp = ({ title, subtitle }) => {

  return (
    <View style={styles.container}>
      
      <View style={styles.containerTitle}>
      <Text  style={styles.title}>{title}</Text>
      
    </View>
    <View style={styles.containerSubtitle}>
      
      <Text  style={styles.subtitle}>{subtitle}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerInto: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    paddingTop: 30,
  },
  title:{
    color: '#333333',
    fontSize: 16
  },
  subtitle:{
    color: '#666666',
    fontSize: 14
  },
  containerTitle:{
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
  padding: 10,
  }, 
  containerSubtitle:{
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
  }
});

export default TextComp;
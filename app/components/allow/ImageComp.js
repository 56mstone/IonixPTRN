import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image
} from "react-native";


const ImageComp = ({ imagen }) => {

  const [expanded, setExpanded] = useState(false);
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
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    paddingTop: 30,
  },
});

export default ImageComp;

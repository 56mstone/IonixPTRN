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
        source={{uri: imagen}}
        style={{ height: 200, width: "100%",   borderTopLeftRadius: 10, borderTopRightRadius: 10,}}
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
    borderRadius: 10,

  },
});

export default ImageComp;

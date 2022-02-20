import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Touchable
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const BtnAllowComp = ({ imagen, handlePermissionRequest }) => {

  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>

    
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
  container: {


    
    
  },
});

export default BtnAllowComp;

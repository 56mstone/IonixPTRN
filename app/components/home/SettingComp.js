import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const NotFoundComp = ({ imagen, handleSetting }) => {

  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
<TouchableOpacity style={styles.touch} onPress={()=>handleSetting()}>
<View style={styles.containerInto}>    
     <Image
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        style={styles.styImagenView}
        source={require("../../assets/Bitmap.png")}
        />
</View>
</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerInto: {
    alignItems: "flex-start",
    alignSelf: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: 50,
    paddingLeft: 25,
    
  },
  touch: {width: "100%"},
  text:{fontSize: 30},
  subText: {
    fontSize: 14,
    textAlign: 'center'
  }
});

export default NotFoundComp;

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  RefreshControl
} from "react-native";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const NotFoundComp = ({ imagen }) => {

  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (


<ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
<View style={styles.containerInto}>    
     <Image
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        style={styles.styImagenView}
        source={require("../../assets/NotFound.png")}
        />
<Text style={styles.text}>   No Results </Text>
<Text style={styles.subText}> Sorry, there are no results for this search. Please try another phrase </Text>
</View>
</ScrollView>
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
  text:{fontSize: 30},
  subText: {
    fontSize: 14,
    textAlign: 'center'
  }
});

export default NotFoundComp;

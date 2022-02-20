import React, {useState} from 'react';
import {  View, StyleSheet, RefreshControl, Text, Image, ScrollView } from 'react-native';
import { IMAGEN_NOTFOUND } from '../../tools/constants';
import ImageComp from './ImageComp'
import TextComp from './TextComp'



const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function IndexScreen({ data, refresh }) {
  const [refreshing, setRefreshing] = useState(false);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);


  const renderItem = ({ item }) => (
    
<View style={styles.card}>
    
    <ImageComp 
      imagen={item.data.url}
      />   
      <TextComp 
      title={item.data.title}
      score={item.data.score} 
      num_comments={item.data.num_comments}
      />
    </View> );


const renderItem2 = (item) => {

  return (
    <View style={styles.card}>
      
    <ImageComp 
      imagen={item.data.url}
      />   
      <TextComp 
      title={item.data.title}
      score={item.data.score} 
      num_comments={item.data.num_comments}
      />
    </View>
  )


}

  return (

    <View style={styles.container}>   
      <ScrollView
        keyboardDismissMode={'on-drag'}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {
        data.map((value, i) =>{
          return renderItem2(value)
        })}
    </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    


    
  },
  card: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 10,

    backgroundColor: 'white',
    margin: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    resizeMode: "stretch"
  }
});
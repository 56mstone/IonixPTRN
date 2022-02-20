import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Tex
} from "react-native";
import { IMAGEN_DOWN, IMAGEN_UP, IMAGEN_MESSAGE } from "../../tools/constants"; 
const TextComp = ({ title, score, num_comments }) => {

  return (
    <View style={styles.container}>  
      <View style={styles.containerFila}>        
        <View style={styles.containerFilaInto}>        
          <View style={styles.containerScore}>
              <Image source={IMAGEN_UP} />
              <Text numberOfLines={2}  style={styles.score}>{score}</Text>   
              <Image source={IMAGEN_DOWN} />
          </View>
          <View style={styles.containerTitle}>
            <Text  style={styles.title}>{title}</Text>        
          </View>
        </View>
      </View>
      <View style={styles.containerComentarios}>
        <View style={styles.containerComentariosInto}>
        <View style={styles.containerMessageImage}>
              <Image source={IMAGEN_MESSAGE}  />       
          </View>
          <View style={styles.containerMessageComents}>
          <Text  style={styles.message}>{num_comments}</Text>        
          </View>
        
                       
        </View>              
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  title:{
    color: '#555555',
    fontSize: 18,
    textAlign: "left",
  },
  score:{
    color: '#333333',
    fontSize: 12,
    textAlign: "left",
  },
  message:{
    color: '#888888',
    fontSize: 16,
    textAlign: "left",
  },
  containerFila: {
    
    
    
    
    
  
  },
  containerFilaInto: {
  flexDirection: 'row',
   paddingHorizontal: 20,
   paddingVertical: 10,
   
   
   
  },

  containerScore: {
    
    margin: 5,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  containerTitle: {
    margin: 5
    
  },
  containerComentarios: {paddingHorizontal: 30},
  containerComentariosInto: {
  
    flexDirection: 'row',
  },
  containerMessage: {
    backgroundColor: "red",
    
    paddingLeft: 50
    
  },
  containerMessageImage: {padding: 10} ,       
  containerMessageComents: {padding: 8}     ,   
});

export default TextComp;
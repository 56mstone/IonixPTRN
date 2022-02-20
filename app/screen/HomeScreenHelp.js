// Imports: Dependencies
import React, { useState } from 'react';
import {Button,StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Imports: Redux Actions
import ActionCreators from '../redux/actions';
import * as constants from '../tools/constants'
import { flashMessage } from '../tools/flashMessage'



function HomeScreen({navigation, numero, funIncrementar}) {
    const [loading, setLoading] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{numero}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('CameraScreen')}
      />
            <Button
        title="Go to Details"
        onPress={() => funIncrementar(2)}
      />


<TouchableOpacity style={styles.card_buttonTouch} onPress={() => funMessage(true)}>
          <View style={styles.card_btn_into}>
            
          </View>
          <View style={styles.card_txt_into}>
            <Text style={styles.txt_title}>{"title"}</Text>
          </View>
        </TouchableOpacity>

        <View>
        <Image
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
                style={styles.styImagenView}
                source={require("../assets/reddit-1.png")}
              />
        </View>

    </View>
  );
}


funMessage = (valor) => {
    if (valor) {
      flashMessage(
        "success",
        "Aprobado"
      )
    }
    else {
      flashMessage(
        "danger",
        "Bloqueado"
      )
    }
  
  }

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    numero: state.desarrolloReducer.numero,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
  const combiner = Object.assign({},
    ActionCreators
  );
  return bindActionCreators(
    combiner,
    dispatch,
  );
}

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);







const styles = StyleSheet.create({
    container: {
      padding: 5,
      flex: 1,
      alignSelf: "center",
    },
    card_btn: { paddingHorizontal: 10, flex: 1 },
  
    card_buttonTouch: {
      
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 5,
      alignItems: "center",
    },
    card_btn_into: { padding: 5 },
    card_txt_into: { padding: 5 },
    txt_title: {
      fontSize: constants.SIZE_LETRA_LARGE,
      color: constants.COLOR_BLANCO
    }
  });
  

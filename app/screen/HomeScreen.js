// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import {SafeAreaView,StyleSheet, View, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Imports: Redux Actions
import ActionCreators from '../redux/actions';
import HomeView from '../components/home/Index'
import NotFoundComp from '../components/home/NotFoundComp'
import SettingComp from '../components/home/SettingComp'

import FuncGetOne from '../tools/FuncGetOne';
import FuncGetTwo from '../tools/FuncGetTwo';

function HomeScreen({navigation,actionChangeScreen, screen}) {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);

    useEffect(() => {
      console.log("Iniciando")
      actionChangeScreen("HomeScreen")
      FuncGetTwo(setData);
  }, []);

    handleList = () => {
        console.log("Cantidad:", data.length)
    if (!data.length > 0 ) {return   <NotFoundComp />    }
    } 

    handleSetting = () => {    
          actionChangeScreen("CameraScreen")
          navigation.navigate('CameraScreen')
    }

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <SettingComp handleSetting={handleSetting} />
      <TextInput 
      placeholder='Search' style={styles.input}
      onChangeText={(value) => FuncGetOne(value, setData, setLoading, setRefresh, setSearch)}
      />
      {handleList()}  
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <HomeView  data={data}/>
      </View>
    </View>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    numero: state.desarrolloReducer.numero,
    screen: state.desarrolloReducer.screen,
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

    input: {
      fontSize: 16,
      marginHorizontal: 20,
      marginVertical: 10,
      height: 30,
      borderRadius: 5,
      backgroundColor: '#DDDDDD',
      color: '#888888',
      textAlign: "center"
    }
  });
  

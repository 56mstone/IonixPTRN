// Imports: Dependencies
import React, { useState, useEffect } from 'react';
import {SafeAreaView, Button,StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Imports: Redux Actions
import ActionCreators from '../redux/actions';
import { flashMessage } from '../tools/flashMessage'
import HomeView from '../components/home/Index'
import NotFoundComp from '../components/home/NotFoundComp'
import SettingComp from '../components/home/SettingComp'


function HomeScreen({navigation,actionChangeScreen, screen}) {


  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);

  handleSearch = async (value) => {
    setRefresh(true)
  console.log("inicio de busqueda", value)
  setSearch(value)
  const url = "https://www.reddit.com/r/chile/search.json?q=valparaiso&limit=100";
      try {
        const response = await fetch(url);
        const json = await response.json();
        
        let datosFiltrados   = json.data.children.filter((value) =>  value.data.post_hint==="image")
        //console.log("datosBuscados: ", datosBuscados)
        
        datosFiltrados =  datosFiltrados.filter((item) => {
          const itemData = item.data.title.toUpperCase();
          const textData = value.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        //console.log("datosFiltrados: ", datosFiltrados)
        //console.log("datos: ", datosFiltrados)
        //console.log("datos filtradosvp: ", datosFiltrados.length)

        
        setData(datosFiltrados)
      } catch (error) {
        console.log("error", error);
      }
      setRefresh(false)

  }



    useEffect(() => {
      console.log("Iniciando")
      
      // cambiando Screen Principal
      actionChangeScreen("HomeScreen")
      console.log("cambiando Screen Principal")

      const url = "https://www.reddit.com/r/chile/new/.json?limit=100";
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          
          const datosFiltrados = json.data.children.filter((value) => value.data.link_flair_text === "Shitposting" && value.data.post_hint==="image")

          //console.log("datos: ", datosFiltrados)
          //console.log("datos filtradosvp: ", datosFiltrados.length)

          
          setData(datosFiltrados)
        } catch (error) {
          
          flashMessage('warning',"Ups!")
        }
      };
  
      fetchData();
  }, []);


  handleList = () => {
    console.log("Cantidad:", data.length)
if (data.length > 0 ) {
  
}
else {
  
  return   <NotFoundComp />    

}
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
      onChangeText={(value) => handleSearch(value)}
      />


          {handleList()}
          
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <HomeView  data={data}/>
  
      </View>


        
    </View>
    </SafeAreaView>
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
    container: {

    },
    card_btn: {  flex: 1 },
  
    card_buttonTouch: {      
      flexDirection: 'row',
      borderRadius: 5,
      alignItems: "center",
    },
    card_btn_into: {},
    card_txt_into: { },
    txt_title: {
      fontSize: 14,
      color: "white"
    },
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
  

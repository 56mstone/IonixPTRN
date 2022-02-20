import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../redux/actions';

//Screen

import CameraScreen from "../screen/CameraScreen";
import PushScreen from "../screen/PushScreen";
import LocationScreen from "../screen/LocationScreen";
import HomeScreen from "../screen/HomeScreen";

const Stack = createStackNavigator();


function App({screen}) {
console.log("Screen actual: ", screen)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screen}>
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PushScreen"
          component={PushScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
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
//export default connect(mapStateToProps, mapDispatchToProps)(App);

const MyTabsRedux = connect(state => ({
  screen: state.desarrolloReducer.screen
}))(App);

export default MyTabsRedux

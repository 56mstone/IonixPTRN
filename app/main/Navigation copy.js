import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screen

import CameraScreen from "../screen/CameraScreen";
import PushScreen from "../screen/PushScreen";
import LocationScreen from "../screen/LocationScreen";
import HomeScreen from "../screen/HomeScreen";

const Stack = createStackNavigator();
let screen = "CameraScreen"

export default function App() {
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

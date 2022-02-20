import React, { useState } from 'react'
import AllowComponent from '../components/allow/Index';
import {LOCATION_TITLE, LOCATION_SUBTITLE, LOCATION_IMAGEN, CANCEL, ALLOW_IMAGEN} from '../tools/constants' 
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions'

export default function LocationScreen({ navigation }) {

 const [cameraGranted, setCameraGranted] = useState(false);
 async function handlePermissionRequest(navegando)  {
    const res = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log("pasando")
      res === RESULTS.GRANTED
        ? setCameraGranted(true)
        : setCameraGranted(false);

       await navegando();
    }

  return(
      <AllowComponent 
      title={LOCATION_TITLE} 
      subtitle={LOCATION_SUBTITLE} 
      imagen={LOCATION_IMAGEN} 
      cancel={CANCEL} 
      button={ALLOW_IMAGEN}
      handlePermissionRequest={handlePermissionRequest}
      navigation={()=>navigation.navigate('HomeScreen')}
    />
    )
   }



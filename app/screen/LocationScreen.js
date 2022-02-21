import React from 'react'
import AllowComponent from '../components/allow/Index';
import {LOCATION_TITLE, LOCATION_SUBTITLE, LOCATION_IMAGEN, CANCEL, ALLOW_IMAGEN} from '../tools/constants' 
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions'

export default function LocationScreen({ navigation }) {

 
 async function handlePermissionRequest(navegando)  {
  await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((result) => {
    console.log("resultado location", result)
  });
       console.log(RESULTS.GRANTED)
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



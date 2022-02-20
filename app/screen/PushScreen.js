import React, { useState } from 'react'
import AllowComponent from '../components/allow/Index';
import {PUSH_TITLE, PUSH_SUBTITLE, PUSH_IMAGEN, CANCEL, ALLOW_IMAGEN} from '../tools/constants' 
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions'

export default function PushScreen({ navigation }) {

 const [cameraGranted, setCameraGranted] = useState(false);
 async function handlePermissionRequest(navegando)  {
    const res = await request(PERMISSIONS.IOS.CAMERA);
      console.log("pasando")
      res === RESULTS.GRANTED
        ? setCameraGranted(true)
        : setCameraGranted(false);

       await navegando();
    }

  return(
      <AllowComponent 
      title={PUSH_TITLE} 
      subtitle={PUSH_SUBTITLE} 
      imagen={PUSH_IMAGEN} 
      cancel={CANCEL} 
      button={ALLOW_IMAGEN}
      handlePermissionRequest={handlePermissionRequest}
      navigation={()=>navigation.navigate('LocationScreen')}
    />
    )
   }



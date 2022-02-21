import React, { useState } from 'react'
import AllowComponent from '../components/allow/Index';
import {CAMERA_TITLE, CAMERA_SUBTITLE, CAMERA_IMAGEN, CANCEL, ALLOW_IMAGEN} from '../tools/constants' 
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions'

export default function CameraScreen({ navigation }) {

 const [cameraGranted, setCameraGranted] = useState(false);
 async function handlePermissionRequest(navegando)  {
    const res = await request(PERMISSIONS.IOS.CAMERA);
      console.log("Resultado Camara: ", RESULTS.GRANTED)
      console.log("Resultado Camara: ")
      res === RESULTS.GRANTED
        ? setCameraGranted(true)
        : setCameraGranted(false);

       await navegando();
    }

  return(
      <AllowComponent 
      title={CAMERA_TITLE} 
      subtitle={CAMERA_SUBTITLE} 
      imagen={CAMERA_IMAGEN} 
      cancel={CANCEL} 
      button={ALLOW_IMAGEN}
      handlePermissionRequest={handlePermissionRequest}
      navigation={()=>navigation.navigate('PushScreen')}
    />
    )
   }



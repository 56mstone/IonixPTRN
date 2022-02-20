import * as React from 'react';
import { Button, View, TouchableOpacity } from 'react-native';
import ImageComp from './ImageComp';
import TextComp from './TextComp';
import BtnAllowComp from './BtnAllowComp';
import BtnCancelComp from './BtnCancelComp';




export default function CameraScreen({ navigation, title, subtitle, imagen, cancel, button, handlePermissionRequest }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      
      <ImageComp 
      imagen={imagen}
      />
      <TextComp 
      title={title}
      subtitle={subtitle} 
      />
      
  

      <TouchableOpacity style={{ width: "100%",}}  onPress={()=>handlePermissionRequest(navigation)}>          
      <BtnAllowComp
        imagen={button} 
        handlePermissionRequest={handlePermissionRequest}
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={{ width: "100%",}}  onPress={navigation}>          
        <BtnCancelComp title={cancel} />
      </TouchableOpacity>

       



      
    </View>
  );
}
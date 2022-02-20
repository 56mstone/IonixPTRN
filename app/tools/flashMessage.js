import { showMessage } from "react-native-flash-message";
import * as constants from './constants'

export function flashMessage(type, message, details){
 return showMessage({
    message: message,
    position: "top",
    description: details,
    type: type, // success, info, danger, warning, default
    icon: "auto",
    duration: 3500,
  })
  

}

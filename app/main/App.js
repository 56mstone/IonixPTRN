import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';
import Navigation from './Navigation'
import { store, persistor } from '../redux/store/store';
import FlashMessage from "react-native-flash-message"

export default App = () => {
return (
<Provider store={store}>
<PersistGate
loading={null}
persistor={persistor}>
<Navigation />
<FlashMessage />
</PersistGate>
</Provider>
);
};
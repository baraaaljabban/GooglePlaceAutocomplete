import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import PlaceAutocomplete from './src/components/Map/PlaceAutocomplete';

export default function App() {
  return (
    <Provider store={store}>
      <PlaceAutocomplete />
    </Provider>
  );
}
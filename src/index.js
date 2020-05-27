import React from 'react';
import Routes from './pages/routes';
import { Provider } from 'react-redux';
import store from './reduxControl/store';

const App = () => ( <Provider store={store}><Routes /></Provider> );

export default App;
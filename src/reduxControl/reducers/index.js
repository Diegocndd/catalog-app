import dataReducer from './dataReducer';
import { combineReducers } from 'redux';

const Reducers = combineReducers({
  dataReducer: dataReducer
});

export default Reducers;
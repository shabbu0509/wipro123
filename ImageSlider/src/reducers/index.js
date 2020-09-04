import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import app from './appReducer';
import teacherreducer from './teacherreducer';
import commonReducer from './commonReducer';

const form = formReducer;

const reducers = {
  app, form, teacherreducer, commonReducer
};

export default combineReducers(reducers);

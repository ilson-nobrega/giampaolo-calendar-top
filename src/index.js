import React, { Component } from 'react';

import  ReactDOM  from 'react-dom';

//import Hello from './Hello';
import SchedulerView from './SchedulerView';
import './style.css';
import { Provider } from 'react-redux'; 
import { store, history } from './store';
import 'fullcalendar/dist/fullcalendar.css';

ReactDOM.render(
    <Provider store={store} history={history}>
      <SchedulerView />
    </Provider>,
    document.getElementById('root')
);


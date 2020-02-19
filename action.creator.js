
import axios from 'axios';
import qs from 'qs';
const events = require('./scheduleevents.json');

const dispatchError = (type, error) => {
  return {
    type,
    results: error
  }
}
const formatList = (results) => {
    return {
        type: 'FETCH_EVENTS_SUCCESS',
        results: events
    }
}; 
export const getEvents = () => (dispatch, state)  => {
     axios.get('scheduleevents.json')
        .then((results)=> { 
          console.log(results);
          return dispatch(formatList(results.data));
        })
        .catch(reason=>{
          console.log('error fetching events: ' + JSON.stringify(reason));
          return dispatchError('FETCH_EVENTS_FAILURE',reason);
        })
  }


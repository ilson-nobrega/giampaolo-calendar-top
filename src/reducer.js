const initialState = { 
    event_list:[] 
};

function eventsReducer(state = initialState, action) {
  //  return state;
   const { type, results } = action;
    const onePage = results ? results.data : [];
    switch (action.type) {
        case 'FETCH_EVENTS_SUCCESS':
            console.log('FETCH_EVENTS_SUCCESS');
            console.log(results); 

            return Object.assign( {}, state,  {event_list:onePage } );
        case 'FETCH_EVENTS_FAILURE':
            console.log('FETCH_EVENTS_FAILURE');
            console.log(results);
            return{
                ...state,
                event_list:[]
            };
        default:
            return state;
    }
}
const reducers = {  
    event: eventsReducer
};

export default reducers;
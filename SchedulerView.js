import React, { Component } from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import classNames from 'classnames'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Schedule} from 'primereact/components/schedule/Schedule'; 
import {getEvents} from './action.creator';

class SchedulerView extends Component {

    constructor() {
        super();
        this.onDragStart=this.onDragStart.bind(this);
        this.onDragStop=this.onDragStop.bind(this);
        this.onEventDrop=this.onEventDrop.bind(this);
    }

    componentWillMount() { 
        this.props.getEvents(); 
    }
    onDragStart( event, jsEvent, view ) { 
        console.log('onDragStart');
    }
    onDragStop( event, jsEvent, view ) {
        console.log('onDragStop');
    }
    onEventDrop(event, delta, revertFunc, jsEvent, view) {
        console.log('onEventDrop');
    }
    render() { 
        const scheduleHeader = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        const fullWidth = { width:'100%' };
        return (
            <div className="p-grid" style={fullWidth}>
                <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>Schedule</h1>
                        <Schedule header={scheduleHeader} events={this.props.event_list} 
                        onEventDragStart = {this.onDragStart} onEventDragStop={this.onDragStop} draggable={true}
                        onEventDrop = {this.onEventDrop} droppable={true} eventStartEditable={true} eventDurationEditable={true}
                        editable={true} defaultDate="2018-05-01"/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapState = (state) => ({ event_list: state.event.event_list });


const mapDispatch  = (dispatch, props, state) => { 
    return bindActionCreators({getEvents }, dispatch);
  }
export default connect(mapState, mapDispatch)(SchedulerView);
//export default SchedulerView;
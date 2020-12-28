import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div>
      <ul className='timeline-event'>
        <li className='event-poster'> {props.person} </li>
        <li className='status-message'> {props.status} </li>
        <li className='event-timestamp'> <Timestamp time = {props.timeStamp} /> </li>
      </ul>
    </div>
  );
}

export default TimelineEvent;



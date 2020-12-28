import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div>
      <ul className='TimelineEvent'>
        <li className='EventPoster'> {props.person} </li>
        <li className='StatusMessage'> {props.status} </li>
        <li className='EventTimestamp'> <Timestamp time={props.timeStamp}/> </li>
      </ul>
    </div>
  );
}

export default TimelineEvent;



import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const timelineComponents = props.events.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent 
          person={event.person} 
          status={event.status} 
          timeStamp={event.timeStamp}
        />
      </li>
    );
  });

  return (
    <ul className="timeline-collection">
      {timelineComponents}
    </ul>
  );
};

export default Timeline;


// For wave 2, you will implement the Timeline component. 
// The Timeline component will take one prop, events, an array of JavaScript objects. 
// The render function will use the array to render a set of TimelineEvent components.

// Then read in the /src/data/timeline.json file into an array of objects in /src/App.js. 
// In the render function of the App component, render a TimeLine component 
// using the array of objects as the events prop.


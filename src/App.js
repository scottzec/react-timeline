import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

// Test Post
// const events = [
//   {
//     person: 'Nica Cordeiro',
//     status: 'Fabulous',
//     timeStamp: '2016-04-13T11:11:03Z'
//   }
// ]


function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace's Social Media Feed</h1>
      </header>
      <main className="App-main">
        <Timeline events={timelineData.events} />
      </main>
    </div>
  );
}

export default App;

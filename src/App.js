import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Ada Lovelace's Social Media Feed</h1>
      </header>
      <main className="App-main">
        <TimelineEvent person="Nica Cordeiro" status="Fabulous" timestamp="2018-04-13T11:11:03Z" />
      </main>
    </div>
  );
}

export default App;

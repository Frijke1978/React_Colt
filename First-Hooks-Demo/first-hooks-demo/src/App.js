import React from 'react';
import './App.css';
import CounterClass from "./CounterClass";
import CounterHooks from "./CounterHooks";
import SimpleFormHooks from "./SimpleFormHooks";
import Toggler from "./Toggler";
import SimpleFormClass from './SimpleFormClass';
import SimpleFormInputHook from "./SimpleFormInputHook";
import Clicker from "./Clicker";
import SWMovies from "./SWMovies";

function App() {
  return (
    <div className="App">
    <SWMovies />
     {/* <CounterClass />
     <CounterHooks />
     <Toggler />
     <SimpleFormClass />
     <SimpleFormHooks />
     <SimpleFormInputHook />
     <Clicker /> */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Course from './component/Course/Course';
import Header from './component/Header/Header';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Course></Course>
      <hr />
      <footer>
        <p> <small> All rights are reserved</small></p>
      </footer>
    </div >
  );
}

export default App;

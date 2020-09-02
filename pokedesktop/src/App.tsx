import React from 'react';
import './App.css';
// import Router from "./page/router";
import Home from "./page/Home/Home";
import './asset/style/base.scss'

function App() {
  return (
      <div className={"App"}>
        <div className={"container"}>
          <Home />
        </div>
      </div>
  );
}

export default App;

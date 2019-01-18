import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Title from "./components/title/title";
import Navigation from "./components/navigation/navigation";
import Content from "./components/content/content";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grid-container" >
          <Title/>
          <Navigation/>
          <Content/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

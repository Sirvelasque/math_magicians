import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/navBar';
import Calculator from './Components/calculator';
import Quote from './Components/Quote';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="Calculator" element={<Calculator />} />
            <Route path="Quote" element={<Quote />} />
          </Routes>

        </HashRouter>
      </div>
    );
  }
}

export default App;

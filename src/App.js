import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/navBar';
import Calculator from './Components/calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="Calculator" exacto element={<Calculator />} />
          </Routes>

        </HashRouter>
      </div>
    );
  }
}

export default App;

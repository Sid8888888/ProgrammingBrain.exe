import './App.css';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import React, { useEffect } from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import routes from './Routes/Routes';

function App() {
  useEffect(() => {
    document.title = "ProgrammingQuiz.exe";
  }, []);
  
  return (
    <div className="App">

      <NavigationBar />
      <BrowserRouter>
        <Routes>
          { routes.data.map((route,i) => {
            return <Route 
              index = {route.type === "main"} 
              path = {route.path} 
              element = {route.component} 
              key = {i}
            /> 
          }) }
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

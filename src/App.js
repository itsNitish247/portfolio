import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Layout from './components/layout';


function App() {
  return (
    <div >
<Router>
  <Routes>
    <Route path='/' element={<Layout />} />

  </Routes>
</Router>
    </div>
  );
}

export default App;

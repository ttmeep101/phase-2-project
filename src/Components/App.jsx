import React, { useState } from 'react'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  const [companies, setCompanies] = useState([])

    return (
      <div className="App">
          <Home companies = {companies} setCompanies = {setCompanies}/>
          <Navbar companies = {companies} setCompanies = {setCompanies}/>
      </div>
    );
}

export default App;

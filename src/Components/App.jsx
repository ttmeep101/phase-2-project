import React, { useState } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Header from './Header'

function App() {
  const [companies, setCompanies] = useState([])

    return (
      <div className="App">
          <Header />
          <Navbar companies = {companies} setCompanies = {setCompanies}/>
          <Home companies = {companies} setCompanies = {setCompanies}/>
      </div>
    );
}

export default App;

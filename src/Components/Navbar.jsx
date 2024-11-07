import React from 'react'

function Navbar({companies, setCompanies, category}){
    function renderCompanies(category){
        fetch(`http://localhost:6001/${category}`)
        .then(resp => resp.json())
        .then(data => setCompanies(data))
    }

    function clearCompanies(){
        setCompanies([])
    }
    
    return (
        <div>
            <button onClick = {() => clearCompanies()}>Home</button>
            <button onClick = {() => renderCompanies('BigTech')}>Big Tech</button>
            <button onClick = {() => renderCompanies('IndustryLeaders')}>Industry Leaders</button>
            <button onClick = {() => renderCompanies('Media')}>Media</button>
            <button onClick = {() => renderCompanies('MarketingSaaS')}>Marketing SaaS</button>
            <button onClick = {() => renderCompanies('Healthcare')}>Healthcare</button>
            <button onClick = {() => renderCompanies('Fintech')}>Fintech</button>
            <button onClick = {() => renderCompanies('Finance')}>Finance</button>
            <button onClick = {() => renderCompanies('b2bSaaS')}>b2b SaaS</button>
            <button onClick = {() => renderCompanies('AI')}>AI</button>
        </div>
    )
}

export default Navbar
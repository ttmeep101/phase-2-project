import React from 'react'
import Page from './Page'

function Home({companies, setCompanies}){
    return (
        <div>
            <Page companies = {companies} setCompanies = {setCompanies}/>
        </div>
    )
}

export default Home
import React from "react"
import { useEffect, useState } from "react"
import Header from "./Header"
import NavBar from "./Navbar"
import CompanyCard from "./CompanyCard"
import overview from "./Overview"

function Media() {
    const [isLoading, setLoading] = useState(false)
    const [companies, setCompanies] = useState([])

    {useEffect(() => {
        if(!isLoading) {
            fetch('http://localhost:6001/Media')
            .then(resp => resp.json())
            .then(data => {
                setCompanies(data)
                setLoading(true)
        })}
    })}

    return (
        <div>
            <Header />
            <NavBar />
            <div className='Overview Header'>
                <h2>{overview.Media.Overview}</h2>
            </div>
            {companies.map((company, index) => (
                <CompanyCard
                    key = {index}
                    company = {company}
                />
            ))}
        </div>
    )
}

export default Media
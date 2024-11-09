import React from "react"
import { useEffect, useState } from "react"
import Header from "./Header"
import NavBar from "./Navbar"
import CompanyCard from "./CompanyCard"
import overview from "./Overview"

function B2BSaaS() {
    const [isLoading, setLoading] = useState(false)
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        if(!isLoading) {
            fetch('http://localhost:6001/B2BSaaS')
            .then(resp => resp.json())
            .then(data => {
                setCompanies(data)
                setLoading(true)
        })}
    })

    return (
        <div className="container">
            <Header />
            <NavBar />
            <div className="content-square">
                <h2 className="section-title">B2B SaaS</h2>
                <p>{overview.B2BSaaS.Overview}</p>
            </div>
            <div className="company-tiles">
                {companies.map((company, index) => (
                    <CompanyCard
                        key={index}
                        company={company}
                    />
                ))}
            </div>
        </div>
    );
}

export default B2BSaaS
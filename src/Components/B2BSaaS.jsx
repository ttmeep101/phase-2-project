import React from "react"
import { useEffect, useState, useMemo } from "react"
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
    }, [isLoading])

    function updateFavoriteStatus(updatedCompany) {
        setCompanies((prevCompanies) =>
          prevCompanies.map((company) =>
            company.id === updatedCompany.id ? { ...company, ...updatedCompany } : company
          )
        );
      }

    const sortedCompanies = useMemo(() => {
        return [...companies].sort((a, b) => b.favorite - a.favorite);
    }, [companies]);

    return (
        <div className="container">
            <Header />
            <NavBar />
            <div className="content-square">
                <h2 className="section-title">B2B SaaS</h2>
                <p>{overview.B2BSaaS.Overview}</p>
            </div>
            <div className="company-tiles">
                {sortedCompanies.map((company) => (
                    <CompanyCard
                        key={company.id}
                        company={company}
                        category = 'B2BSaaS'
                        updateFavoriteStatus = {updateFavoriteStatus}
                    />
                ))}
            </div>
        </div>
    );
}

export default B2BSaaS
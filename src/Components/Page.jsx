import React, { useState, useEffect} from 'react'
import CompanyCard from './CompanyCard'

function Page({companies, setCompanies}){
    
    const [isLoading, setLoading] = useState(false)

    console.log(companies)

    return (
        <div>
            {companies.map((company, index) => (
                <CompanyCard
                    key = {index}
                    company = {company}
                />
            ))}
        </div>
    )
}

export default Page
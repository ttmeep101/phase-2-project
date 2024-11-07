import React, { useState, useEffect} from 'react'
import CompanyCard from './CompanyCard'

function Page({companies, setCompanies}){
    
    const [isLoading, setLoading] = useState(false)
    
    {useEffect(() => {
        if(!isLoading) {
          setLoading(true)
          fetch('http://localhost:6001/AI')
          .then(resp => resp.json())
          .then(data => setCompanies(data), [])
        }
      })}

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
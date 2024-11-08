import React from 'react'

function CompanyCard(company){
    
    return (
        <div>
            <h3>{company.company.name}</h3>
            <h4>{company.company.salary}</h4>
            <h4>{company.company.balance}</h4>
            <h4>
                <a href={company.company.link}>Company Link</a>
            </h4>
            <h4>{company.company.notes}Notes Placeholder</h4>
        </div>
    )
}

export default CompanyCard
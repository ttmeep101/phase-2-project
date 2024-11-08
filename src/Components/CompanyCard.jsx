import React from 'react'

function CompanyCard(company){
    
    return (
        <ul>
            <li>{company.company.name}</li>
            <li>{company.company.salary}</li>
            <li>{company.company.balance}</li>
            <li>
                <a href={company.company.link}>Company Link</a>
            </li>
            <li>{company.company.notes}</li>
        </ul>
    )
}

export default CompanyCard
import React from 'react';

function CompanyCard({ company }) {
    return (
        <div className="company-tile">
            <h3 className="company-name">{company.name}</h3>
            <h4 className="company-salary"> Salary: {company.salary}</h4>
            <h4 className="company-balance"> Work-life Balance: {company.balance}</h4>
            <h4 className="company-link">
                <a href={company.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </h4>
            <h4 className="company-notes">{company.notes} Notes Placeholder</h4>
        </div>
    );
}

export default CompanyCard;
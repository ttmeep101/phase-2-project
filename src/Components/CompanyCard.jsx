import React from 'react';

function CompanyCard({ company }) {
    return (
        <div className="company-tile">
            <h3 className="company-name">{company.name}</h3>
            <h4 className="company-link">
                <a href={company.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </h4>
            <h4 className="glassdoor-link">
                <a href={company.glassdoor} target="_blank" rel="noopener noreferrer">Glassdoor</a>
            </h4>
        </div>
    );
}

export default CompanyCard;
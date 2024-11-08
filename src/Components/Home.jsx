import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import overview from './Overview'

function Home() {
    console.log(overview.AI.Overview)
    return (
        <div>
            <Header />
            <Navbar />

            <div className="overview"> 
                <h2>Site Overview Placeholder</h2>
            </div>

            <div className="BigTechHeader">
                <h2>{overview.BigTech.Overview}</h2>
                <h2>{overview.Media.Overview}</h2>
                <h2>{overview.AI.Overview}</h2>
            </div>

            <div className="SaaS">
                <h2>{overview.MarketingSaaS.Overview}</h2>
                <h2>{overview.B2BSaaS.Overview}</h2>
            </div>

            <div className="Finance">
                <h2>{overview.Fintech.Overview}</h2>
                <h2>{overview.Finance.Overview}</h2>
            </div>

            <div className="HealthcareHeader">
                <h2>{overview.Healthcare.Overview}</h2>
            </div>

            <div className="IndustryLeadersHeader">
                <h2>{overview.IndustryLeaders.Overview}</h2>
            </div>

            <div className="MostFavoritedHeader">
                <h2>{overview.MostFavorited.Overview}</h2>
            </div>

            <div className="CommunitySubmissionHeader">
                <h2>{overview.CommunitySubmissions.Overview}</h2>
            </div>
        </div>
    );
}

export default Home;
import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import overview from './Overview'
import { Link } from 'react-router-dom'

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
                <Link to='/BigTech'><div>
                    <h2>{overview.BigTech.Overview}</h2>
                </div></Link>
                <Link to='/Media'><div>
                    <h2>{overview.Media.Overview}</h2>
                </div></Link>
                <Link to='/AI'><div>
                    <h2>{overview.AI.Overview}</h2>
                </div></Link>
            </div>

            <div className="SaaS">
                <Link to='/MarketingSaaS'><div>
                    <h2>{overview.MarketingSaaS.Overview}</h2>
                </div></Link>
                <Link to='/B2BSaaS'><div>    
                    <h2>{overview.B2BSaaS.Overview}</h2>
                </div></Link>
            </div>

            <div className="Finance">
                <Link to='/Fintech'><div>
                    <h2>{overview.Fintech.Overview}</h2>
                </div></Link>
                <Link to='/Finance'><div>
                    <h2>{overview.Finance.Overview}</h2>
                </div></Link>
            </div>

            <div className="HealthcareHeader">
                <Link to='/Healthcare'><div>
                    <h2>{overview.Healthcare.Overview}</h2>
                </div></Link>
            </div>

            <div className="IndustryLeadersHeader">
                <Link to='/IndustryLeaders'><div>
                    <h2>{overview.IndustryLeaders.Overview}</h2>
                </div></Link>
            </div>

            <div className="MostFavoritedHeader">
                <Link to='/MostFavorited'><div>
                    <h2>{overview.MostFavorited.Overview}</h2>
                </div></Link>
            </div>

            <div className="CommunitySubmissionHeader">
                <Link to='/CommunitySubmissions'><div>
                    <h2>{overview.CommunitySubmissions.Overview}</h2>
                </div></Link>
            </div>
        </div>
    );
}

export default Home;
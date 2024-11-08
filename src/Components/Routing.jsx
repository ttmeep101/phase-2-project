import { createBrowserRouter} from "react-router-dom";
import Home from './Home';
// import Big Tech from './Big Tech';
// import Industry Leaders from './IndustryLeaders';
// import Media from './Media';
// import Marketing SaaS from './MarketingSaaS';
// import Healthcare from './Healthcare';
// import Fintech from './Fintech';
// import Finance from './Finance';
// import b2bSaaS from './b2bSaaS';
// import AI from './AI';
// import from './'; --> CommunitySubmissions
// import from './'; --> MostFavorited

// import ErrorPage from './pages/ErrorPage';

const routes = createBrowserRouter([
  { path: '/', element: <Home /> }
//   { path: '/Big Tech', element: <BigTech /> },
//   { path: '/Industry Leaders', element: <IndustryLeaders /> },
//   { path: '/Media', element: <Media /> },
//   { path: '/Marketing SaaS', element: <MarketingSaaS /> },
//   { path: '/Healthcare', element: <Healthcare /> },
//   { path: '/Fintech', element: <Fintech /> },
//   { path: '/Finance', element: <Finance /> },
//   { path: '/b2bSaaS', element: <b2bSaaS /> },
//   { path: '/AI', element: <AI /> },
//   { path: '/CommunitySubmissions', element: <CommunitySubmissions /> },
//   { path: '/MostFavorited', element: <MostFavorited /> },
//   { path: '*', element: <ErrorPage /> }
]);

export default routes;
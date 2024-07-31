// Layouts
// import { HeaderOnly } from './components/Layout';

// Pages


import Company from '../Pages/Company/Company';
import FormSection from '../Pages/Contact/FormSection';
import Home from '../Pages/Home/Home';

import Map from '../Pages/Map';
import Service from '../Pages/Service/Service';


// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/service', component: Service },
    { path: '/company', component: Company },
    { path: '/contact', component: FormSection },
    { path: '/map', component: Map, layout : null },
    
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
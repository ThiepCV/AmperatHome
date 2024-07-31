import React  from 'react';
import AppSection from "./AppSection/AppSection"
import PriceSection from "./PriceSection/PriceSection"
import PartnerSection from './PatnerSection/PartnerSection';
import NewsSection from '../Home/NewsSection/NewsSection';
import ServiceSection from './ServiceContent/ServiceSection';

const Service =()=>{
    return(
        <div>
            <AppSection />
            <PriceSection />
            <ServiceSection />
            <PartnerSection />
            <NewsSection />
            
        </div>
    )
}
export default Service
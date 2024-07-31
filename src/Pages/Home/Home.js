import React  from 'react';

import Slider from "./Slider/Slider"
import TextSection from"./TextComponent/TextSection"
import HeroSection from "./HeroSetion/HeroSetion"
import Feedback from "./FeedbackSection/Feedback"
import TestimonialSection from "./TestimonialSection/TestimonialSection"
import ReasonSection from "./ReasonSection/ReasonSection"
import NewsSection from './NewsSection/NewsSection';
const Home= () =>{
    

    return(
        <div>
            <Slider />
            <TextSection />
            <Feedback />
            <HeroSection />
            <TestimonialSection />
            <ReasonSection />
            <NewsSection />
        </div>
    )
}
export default Home
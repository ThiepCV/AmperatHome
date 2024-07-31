import React, { useEffect, useState } from 'react';
import "./PartnerSection.css"

function PartnerSection(){
    const logos =[
        {
            name: "1",
            image:"https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png"
        },
        {
            name: "2",
            image: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/525858954db2db7a24eb0d1070d316de.png"
        },
        {
            name: "3",
            image: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png"
        },
        {
            name: "4",
            image: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/525858954db2db7a24eb0d1070d316de.png"
        },
        {
            name: "5",
            image: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/aff2c7c41798a9e8d510293d676b1308.png"
        },
        {
            name: "6",
            image: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/d4bd2adab19561c4303698d516577b7c.png"
        },
        {
          name: "7",
          image: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/525858954db2db7a24eb0d1070d316de.png"
      },
      {
          name: "8",
          image: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/aff2c7c41798a9e8d510293d676b1308.png"
      },
      {
          name: "9",
          image: "https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/d4bd2adab19561c4303698d516577b7c.png"
      }
    
    ]

    const [currentLogos, setCurrentLogos] = useState(logos.slice(0, 3));
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(currentIndex,currentLogos)
    useEffect(() => {
        const interval = setInterval(() => {
            showNextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const showNextSlide = () => {
        let nextIndex = (currentIndex + 3) % logos.length;
        setCurrentLogos(logos.slice(nextIndex, nextIndex + 3));
        setCurrentIndex(nextIndex);
    };
    
    
  
    return (
      <div className='partnerSec'>
        <div className='partnerWrap'>
          <div className='title'>
            <h1>これらの企業はAMPERACTを愛しています、そしてあなたもそうするでしょう！</h1>
          </div>
          <div>
            <ul className='logoPart'>
              {currentLogos.map((logo, index) => (
                <li key={index} className='logoPartner'>
                  <img alt={logo.name} src={logo.image} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
}
export default PartnerSection
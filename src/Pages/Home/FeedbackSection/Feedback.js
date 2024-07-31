import "./Feedback.css"
import React  from 'react';

const Feedback= () => {
    return(
        <div className="value">
        <div className="value-btn">
            <h2 className="value-tittle">評価</h2>
            <a href={() => false}>Rated 4.5/5 based on 5272 reviews on Trustpilot.</a>
            <div className="value-img">
                
                <img src="../images/value_ic.png" alt="Shante" />
                </div>
            <p>Based on 456 reviews</p>
            <div className="connect">
                    <a className="connect_link" href={() => false}><img src="../images/fb_icon.png" alt=""/></a>
                    <a className="connect_link" href={() => false}><img src="../images/ins_icon.png" alt=""/></a>
                    <a className="connect_link" href={() => false}><img src="../images/pri_icon.png" alt=""/></a>
                    <a className="connect_link" href={() => false}><img src="../images/tw_icon.png" alt=""/></a>
                    <a className="connect_link" href={() => false}><img src="../images/ytb_icon.png" alt=""/></a>
            </div>
        </div>
            
    </div>
    )
}
export default Feedback
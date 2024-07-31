import React  from 'react';

import "./AppSection.css"
const AppSection =()=>{
    return (
        <main className="main-section">
          <div className="app-section">
            <div className="app-content">
              <h1 className="app-title">AMPERACT 簡単な登録</h1>
              <p className="app-description">簡単な登録は、1クリックで完了します。</p>
              <div className="app-images">
                <div className="app-image"><img src="../images/phone1.png" alt="Phone 1" /></div>
                <div className="app-image"><img src="../images/phone2.png" alt="Phone 2" /></div>
                <div className="app-image"><img src="../images/phone3.png" alt="Phone 3" /></div>
              </div>
            </div>
            <div className="app-video">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="Amperact Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </main>
      );
}
export default AppSection





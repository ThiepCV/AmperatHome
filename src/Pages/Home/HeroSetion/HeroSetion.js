
import React from 'react';
import './HeroSetion.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-title">
        <h1>AMPERACTは何処へも</h1>
        <p>AMPERACTはどんな旅でもあなたと共に、どこでも効率的で便利な電気自動車充電ソリューションを提供します。</p>
      </div>
      <div className="hero-cards">
        <div className="hero-card">
          <img src="../images/cart-img1.png" alt='' />
          <h2>ビジネス＆商業</h2>
          <p>お客様を引き付けるために、貴社の敷地に高速充電ステーションを設置しましょう。</p>
          <button className="btn">始めましょう</button>
        </div>
        <div className="hero-card">
          <img src="../images/cart-img2.png" alt="自動車メーカーパートナー" />
          <h2>自動車メーカーパートナー</h2>
          <p>AMPERACTと提携して、組織に適した充電ソリューションを設計しましょう。</p>
          <button className="btn">始めましょう</button>
        </div>
        <div className="hero-card">
          <img src="../images/cart-img3.png" alt="ドライバー" />
          <h2>ドライバー</h2>
          <p>日本全国に900以上の高速充電ステーションでどんなEVでも充電できます。</p>
          <button className="btn">始めましょう</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
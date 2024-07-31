
import React from 'react';
import './TextSection.css';
const TextSection = () => {
  return (
    <div className="text-section">
      <div className="text-content">
        <h2>簡便、頼もしい、快適</h2>
        <p>
          私たちの会社は、世界的なテクノロジー分野のリーダーの一つであり、顧客に最先端のソリューションを提供することに常に革新を続けています。製品やサービスのシンプルさと利便性を組み合わせ、顧客は安心感と信頼感を持っています。新しい刺激的な体験を提供するだけでなく、顧客が最高の快適さと利便性を感じることを確実にします。広範で革新的なビジョンと創造性を持ち、私たちは世界中の人々の日常生活にテクノロジーと快適さをもたらすために努力し続けています。
        </p>
      </div>
      <div className="image-section">
        <img src="../images/phone locate.png" alt=''/>
        {/* <h2>AMPERACT</h2>
        <p>
          AMPERRACT会社は信頼性の高いEV充電ソリューションを提供し、 便利さと普及を実現するために努力しています。
        </p> */}
      </div>
    </div>
  );
};

export default TextSection;
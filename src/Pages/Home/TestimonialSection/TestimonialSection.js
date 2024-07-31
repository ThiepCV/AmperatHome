
import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-image">
        <img src="../images/pr_img.png" alt="Shante" />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-quote">
          「私はAMPERACTを選んで高速充電を利用しています。アプリを使うか、Googleで「EV充電」と検索して、近くの場所を見つけてすぐに行動できるからです。」
        </p>
        <div className="testimonial-info">
          <p className="testimonial-name">シャンテ</p>
          <p className="testimonial-location">カリフォルニア州ロサンゼルス</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
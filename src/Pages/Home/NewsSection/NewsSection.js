
import React from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      imageUrl: '../images/news-img1.png', 
      title: 'Ampractが電気自動車充電ネットワークを拡大',
      excerpt: 'Ampractは、電気自動車充電ネットワークを拡大し、2025年までに全国に5,000以上の充電ステーションを配置することを発表しました。',
      url: '[URL_1]', 
    },
    {
      id: 2,
      imageUrl: '../images/news-img2.png', 
      title: 'Ampractがスマートグリッド技術を発表',
      excerpt: 'Ampractは、再生可能エネルギーの統合と送電網の効率化を支援するスマートグリッド技術を発表しました。',
      url: '../images/news-img1.png', 
    },
    {
      id: 3,
      imageUrl: '../images/news-img3.png',
      title: 'Ampractが持続可能な未来への取り組みを発表',
      excerpt: 'Ampractは、持続可能な未来への取り組みを発表し、温室効果ガス排出量を削減し、クリーンエネルギーへの移行を加速させることを約束しました。',
      url: '[URL_3]', 
    },
    {
      id: 4,
      imageUrl: '../images/news-img4.png', 
      title: 'Ampractが新しいエネルギー貯蔵ソリューションを発表',
      excerpt: 'Ampractは、再生可能エネルギーの貯蔵と送電を可能にする革新的なエネルギー貯蔵ソリューションを発表しました。',
      url: '[URL_4]',
    },
  ];

  return (
    <div className="news-section">
      <div className="news-header">
        <h2>Ampractに関する最新ニュース</h2>
      </div>
      <div className="news-grid">
        {newsArticles.map((article) => (
          <div className="news-card" key={article.id}>
            <img src={article.imageUrl} alt={article.title} />
            <div className="news-card-content">
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <a href={article.url} className="btn">
                詳しく見る
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
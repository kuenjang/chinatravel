import React from 'react';
import './TipsSection.css';

const TipsSection = () => {
  const tips = [
    { title: '行動支付', content: '準備好支付寶 (Alipay) 或微信支付 (WeChat Pay)，現在都已支援綁定國際信用卡。', icon: '📱' },
    { title: '網路環境', content: '建議提前購買具有漫遊功能的 SIM 卡或使用合法 VPN，以便訪問日常使用的社交媒體。', icon: '🌐' },
    { title: '住宿登記', content: '外籍人士居住在非酒店場所時，記得在 24 小時內前往當地派出所辦理臨時住宿登記。', icon: '🏠' },
    { title: '必備 App', content: '高德地圖（導航）、大眾點評（美食）、攜程 (Trip.com) 或去哪兒（交通預訂）。', icon: '🚀' }
  ];

  return (
    <section className="tips-section" id="tips">
      <h2 className="section-title">旅居實用指南</h2>
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div key={index} className="tip-item glass fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="tip-icon">{tip.icon}</div>
            <div className="tip-info">
              <h3 className="tip-title">{tip.title}</h3>
              <p className="tip-content">{tip.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TipsSection;

import React from 'react';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import TipsSection from './components/TipsSection';
import './App.css';

function App() {
  const destinations = [
    {
      title: "西南慢活：雲南大理",
      description: "在蒼山洱海間尋找靈感。大理以其四季如春的氣候和極低的生活成本，成為數位游牧者的首選。您可以租下一間帶小院的民居，每天在陽光下工作。",
      budget: "約 2,000 RMB/月",
      image: "/assets/yunnan.png",
      tags: ["自然", "慢節奏", "高性價比"]
    },
    {
      title: "巴蜀煙火：四川成都",
      description: "美食之都的悠閒生活。成都不僅有熊貓和火鍋，更有濃厚的茶館文化。市區周邊如樂山、都江堰，物價更為親民，讓您在煙火氣中體驗極致生活。",
      budget: "約 2,500 RMB/月",
      image: "/assets/sichuan.png",
      tags: ["美食", "文化", "城市機能"]
    },
    {
      title: "閩南古韻：福建泉州",
      description: "半城煙火半城仙。泉州是海上絲綢之路的起點，充滿紅磚古厝與古寺。這裡的海岸線美麗且寧靜，適合喜歡歷史文化與海邊生活的旅居者。",
      budget: "約 2,200 RMB/月",
      image: "/assets/fujian.png",
      tags: ["海濱", "歷史", "古早味"]
    }
  ];

  return (
    <div className="app">
      <Hero />
      
      <section className="destinations-section">
        <h2 className="section-title">精選旅居目的地</h2>
        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </section>

      <TipsSection />

      <footer className="footer">
        <div className="footer-content">
          <h3>旅居中國指南</h3>
          <p>開啟您的全球慢活之旅</p>
          <div className="footer-links">
            <span>隱私政策</span>
            <span>聯繫我們</span>
            <span>加入社群</span>
          </div>
          <p className="copyright">© 2024 China Sojourn Guide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

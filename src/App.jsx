import React, { useState } from 'react';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import TipsSection from './components/TipsSection';
import ItineraryModal from './components/ItineraryModal';
import './App.css';

function App() {
  const [selectedDest, setSelectedDest] = useState(null);

  const yunnanDetail = {
    title: "雲南大理 7 天深度旅居計畫",
    image: "/assets/yunnan.png",
    overview: [
      { day: "Day 1", theme: "抵達大理，慢啟旅居", experience: "入住古城小院、適應氣候、品嚐地道小吃", budget: "住宿: 100-150元<br>餐飲: 50-80元" },
      { day: "Day 2", theme: "洱海西岸，騎行畫卷", experience: "海西生態廊道騎行(約12km)、稻田咖啡", budget: "交通: 15-30元<br>餐飲: 80-120元" },
      { day: "Day 3", theme: "登蒼山，訪妙庵", experience: "感通索道、玉帶雲遊路徒步(4-5小時)、寂照庵素齋", budget: "門票+索道: 130元<br>素齋: 20元" },
      { day: "Day 4", theme: "逛喜洲，染古布", experience: "喜洲趕早市、轉角樓、扎染DIY體驗", budget: "扎染: 100-200元<br>餐飲: 80-120元" },
      { day: "Day 5", theme: "沙溪一日，尋靜謐", experience: "茶馬古道古集市、玉津橋、古戲台", budget: "交通: 30-160元<br>餐飲: 80-120元" },
      { day: "Day 6", theme: "深度探索，靈感日", experience: "大理大學周邊、床單廠藝術區、數位游牧社區", budget: "餐飲: 80-120元<br>其他: 按需" },
      { day: "Day 7", theme: "旅居生活，自由享", experience: "咖啡館辦公、整理收穫、準備啟程", budget: "按個人消費習慣" }
    ],
    details: [
      { title: "Day 1：抵達大理，慢啟旅居", content: "抵達後，推薦在大理古城東門或南門附近安頓。去古城人民路逛逛，晚餐嚐嚐「梅子井酒家」的白族風味，讓身心開始適應這裡的愜意。" },
      { title: "Day 2：洱海西岸，騎行畫卷", content: "從才村碼頭出發，騎行至磻溪S灣和廊橋。累了可以去洱海邊的「心邸咖啡」或喜洲的「田珈啡」，對著稻田工作。" },
      { title: "Day 3：登蒼山，訪妙庵", content: "搭乘感通索道上山，步行在海拔2600米的玉帶雲遊路。前往「寂照庵」享用著名的20元素齋，感受充滿多肉植物的禪意空間。" },
      { title: "Day 4：逛喜洲，染古布", content: "早起趕喜洲早市，買個喜洲粑粑。下午去「藍續古法扎染」體驗非遺手藝，親手製作獨一無二的藍染作品。" },
      { title: "Day 5：沙溪一日，尋靜謐", content: "搭乘拼車前往沙溪。漫步寺登街、玉津橋。這裡是茶馬古道上唯一倖存的古集市，比大理更古樸寧靜。" },
      { title: "Day 6：深度探索，靈感日", content: "去大理大學俯瞰洱海全景，下午去床單廠藝術區看畫廊與工作室。需要辦公可去 Dali Hub 或 NCC 社區。" },
      { title: "Day 7：旅居生活，自由享", content: "在古城找家像「唐咖」或「Wake uuup」的咖啡館，處理工作或整理照片。去北門菜市場買點風乾菌子帶走。" }
    ],
    spending: [
      "住宿：精裝民居包月約 1500-2000 RMB",
      "餐飲：日均約 80-150 RMB",
      "交通：共享單車/電動車極其便利且便宜",
      "省錢貼士：長住可與店主商議週租或月租價格"
    ],
    prep: [
      "證件：身份證、駕駛證 (若想自駕)",
      "防曬：雲南紫外線極強，必備高倍防曬、墨鏡、帽子",
      "衣物：早晚溫差大，需準備輕便外套",
      "藥物：常用腸胃藥與潤唇膏"
    ]
  };

  const destinations = [
    {
      id: "yunnan",
      title: "西南慢活：雲南大理",
      description: "在蒼山洱海間尋找靈感。大理以其四季如春的氣候和極低的生活成本，成為數位游牧者的首選。您可以租下一間帶小院的民居，每天在陽光下工作。",
      budget: "約 2,000 RMB/月",
      image: "/assets/yunnan.png",
      tags: ["自然", "慢節奏", "高性價比"],
      detailData: yunnanDetail
    },
    {
      id: "sichuan",
      title: "巴蜀煙火：四川成都",
      description: "美食之都的悠閒生活。成都不僅有熊貓和火鍋，更有濃厚的茶館文化。市區周邊如樂山、都江堰，物價更為親民，讓您在煙火氣中體驗極致生活。",
      budget: "約 2,500 RMB/月",
      image: "/assets/sichuan.png",
      tags: ["美食", "文化", "城市機能"]
    },
    {
      id: "fujian",
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
            <DestinationCard 
              key={index} 
              {...dest} 
              onExplore={() => dest.detailData && setSelectedDest(dest.detailData)}
            />
          ))}
        </div>
      </section>

      <TipsSection />

      <ItineraryModal 
        isOpen={!!selectedDest} 
        onClose={() => setSelectedDest(null)} 
        data={selectedDest}
      />

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

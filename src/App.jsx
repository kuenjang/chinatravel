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

  const chengduDetail = {
    title: "四川成都 7 天巴適煙火之旅",
    image: "/assets/sichuan.png",
    overview: [
      { day: "Day 1", theme: "抵達，火鍋喚醒味蕾", experience: "入住市中心、九眼橋夜景、地道老火鍋", budget: "住宿: 200-300元<br>餐飲: 150-300元" },
      { day: "Day 2", theme: "熊貓與潮流", experience: "大熊貓基地看「花花」、IFS/太古里打卡", budget: "門票: 55元<br>餐飲: 150-250元" },
      { day: "Day 3", theme: "三國文化與煙火", experience: "武侯祠紅牆、錦里小吃、寬窄巷子慢生活", budget: "門票: 50元<br>餐飲: 150-250元" },
      { day: "Day 4", theme: "文博與非遺", experience: "文殊院素齋、成都博物館、川劇變臉秀", budget: "門票: 10-50元<br>餐飲: 150-250元" },
      { day: "Day 5", theme: "問道青城·拜水都江堰", experience: "都江堰水利工程、青城山幽靜徒步", budget: "交通: 100元<br>門票: 160元" },
      { day: "Day 6", theme: "一日閱盡樂山大佛", experience: "高鐵往返樂山、朝拜石刻大佛、樂山美食", budget: "交通: 100元<br>門票: 80元" },
      { day: "Day 7", theme: "漫步玉林，愜意返程", experience: "玉林路Citywalk、小酒館、選購特產", budget: "餐飲: 100-200元" }
    ],
    details: [
      { title: "Day 1：抵達，火鍋喚醒味蕾", content: "入住春熙路或太古里附近。晚餐推薦「巴蜀大宅門」，餐後漫步九眼橋感受成都豐富的夜生活。" },
      { title: "Day 2：熊貓與潮流", content: "早上8:30前往大熊貓基地，西門入園看「花花」。下午回市區與IFS爬牆熊貓合影，逛望平街美食。" },
      { title: "Day 3：三國文化與市井煙火", content: "參觀武侯祠紅牆竹影，中午逛錦里吃三大炮。下午在寬窄巷子喝蓋碗茶，晚餐去奎星樓街吃冒椒火辣。" },
      { title: "Day 4：文博與非遺", content: "文殊院感受千年古剎，品嚐香園素齋。晚上去梨園會館看一場精彩的川劇變臉與吐火表演。" },
      { title: "Day 5：問道青城·拜水都江堰", content: "搭乘城際列車前往都江堰。先看魚嘴分水堤，下午遊覽青城山前山，感受「青城天下幽」的氛圍。" },
      { title: "Day 6：一日閱盡樂山大佛", content: "高鐵1小時直達樂山。看完大佛後，一定要吃樂山的蹺腳牛肉與缽缽雞，這是成都人也會特地跑去吃的美味。" },
      { title: "Day 7：漫步玉林，愜意返程", content: "玉林路Citywalk，逛逛芳華街的手作店與咖啡館。在趙雷歌中的「小酒館」前打個卡，帶著火鍋底料返程。" }
    ],
    spending: [
      "住宿：春熙路/太古里是便利之選，玉林/芳草街更具本地生活氣息",
      "開銷：日均約 200-500 RMB (豐儉由人)",
      "數位游牧：天星村有專門的共居空間，玉林周邊咖啡館密集，非常適合辦公"
    ],
    prep: [
      "預訂：熊貓基地門票務必提前7天預約",
      "飲食：若不吃辣務必主動告知「微微辣」或「免辣」",
      "交通：市區捷運極其發達，支付寶/微信乘車碼即可"
    ]
  };

  const quanzhouDetail = {
    title: "福建泉州 6 天古港海風之旅",
    image: "/assets/fujian.png",
    overview: [
      { day: "Day 1", theme: "初識世遺古城", experience: "漫步西街、開元寺雙塔、天台日落", budget: "住宿: 200-300元<br>餐飲: 150-250元" },
      { day: "Day 2", theme: "多元宗教之旅", experience: "關岳廟求籤、清淨寺、府文廟、天后宮", budget: "門票: 3-10元<br>餐飲: 150-250元" },
      { day: "Day 3", theme: "海絲記憶與非遺", experience: "海交館歷史、非遺館、欣賞南音或木偶戲", budget: "門票: 0元<br>餐飲: 150-250元" },
      { day: "Day 4", theme: "海風與漁村文化", experience: "蟳埔村簪花圍體驗、崇武古城牆海景", budget: "交通: 100元<br>簪花: 40元" },
      { day: "Day 5", theme: "慢節奏的古城秘境", experience: "承天禪寺避世、市舶司遺址、中山路手信", budget: "門票: 0元<br>餐飲: 150-250元" },
      { day: "Day 6", theme: "古早味晨間探索", experience: "水門國仔面線糊、燒肉粽、返程", budget: "餐飲: 50-100元" }
    ],
    details: [
      { title: "Day 1：初識世遺古城", content: "入住西街附近。在西街品嚐滿煎糕，游覽開元寺。傍晚去「有鯉天台」俯瞰東西雙塔剪影。" },
      { title: "Day 2：多元宗教之旅", content: "先去關岳廟感受閩南香火，再去隔壁清淨寺。午餐吃斯丹姜母鴨，下午拜訪守護海神的泉州天后宮。" },
      { title: "Day 3：海絲記憶與非遺之夜", content: "海交館能讓你深刻理解「刺桐港」的歷史。晚上必看提線木偶戲或南音，這是中國音樂的活化石。" },
      { title: "Day 4：海風與漁村文化", content: "在蟳埔村體驗「簪花圍」，在蚵殼厝前拍照。下午前往崇武古城，在明代石砌城牆上看海。" },
      { title: "Day 5：慢節奏的古城秘境", content: "承天禪寺比開元寺更清幽。下午逛中山路騎樓街，買點閩南特產。這裡的生活步調慢得讓人想留下。" },
      { title: "Day 6：古早味晨間探索", content: "最後一餐留給面線糊，加份醋肉與油條。感受泉州人的經典早餐後，帶著滿滿的回憶返程。" }
    ],
    spending: [
      "住宿：古城西街或鐘樓附近的紅磚古厝民宿最有氛圍",
      "開銷：泉州物價極其親民，日均 150-300 RMB 即可過得很滋潤",
      "交通：古城內推薦搭乘「小白」電瓶車，招手即停 2 元/人"
    ],
    prep: [
      "防曬：東南沿海夏季炎熱，紫外線強，需備足防曬品",
      "民俗：參觀宗教場所請著裝得體，部分區域禁止拍照請遵守指示",
      "預訂：熱門非遺表演（如木偶戲）建議提前查詢場次與預約"
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
      tags: ["美食", "文化", "城市機能"],
      detailData: chengduDetail
    },
    {
      id: "fujian",
      title: "閩南古韻：福建泉州",
      description: "半城煙火半城仙。泉州是海上絲綢之路的起點，充滿紅磚古厝與古寺。這裡的海岸線美麗且寧靜，適合喜歡歷史文化與海邊生活的旅居者。",
      budget: "約 2,200 RMB/月",
      image: "/assets/fujian.png",
      tags: ["海濱", "歷史", "古早味"],
      detailData: quanzhouDetail
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

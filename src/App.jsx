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

  const xiamenDetail = {
    title: "福建廈門 7 天海濱慢活與閩南風情之旅",
    image: "/assets/xiamen.png",
    overview: [
      { day: "Day 1", theme: "抵達鷺島，漫步騎樓", experience: "小三通/高鐵抵達、中山路步行街騎樓老街、品嚐唐沫茶兮與葉氏麻糍", budget: "住宿: 180-250元<br>餐飲: 80-120元" },
      { day: "Day 2", theme: "琴島鼓浪，萬國風華", experience: "渡輪登鼓浪嶼、日光岩、菽莊花園、品嚐葉氏麻糍鼓浪嶼老店", budget: "船票+門票: 100元<br>餐飲: 100-150元" },
      { day: "Day 3", theme: "南普陀尋幽，山海夕陽", experience: "參觀南普陀寺千年古剎、喝一樹一葉芒果烏龍、傍晚登山海健康步道", budget: "門票: 0-30元<br>餐飲: 80-120元" },
      { day: "Day 4", theme: "環島椰風，沙坡尾夕照", experience: "騎行環島路椰風寨、漫步沙坡尾漁港文創區、品嚐百家春薑母鴨", budget: "交通: 20-50元<br>餐飲: 150-200元" },
      { day: "Day 5", theme: "八市煙火，閩南古早味", experience: "探訪第八市場、吃朱記手撕雞與鐘麗君滿煎糕、大元路芋包王茶餐廳", budget: "餐飲: 100-180元<br>其他: 30-50元" },
      { day: "Day 6", theme: "集美學村，長堤海上列車", experience: "搭地鐵1號線海上列車、參觀集美學村嘉庚建築、十里長堤看日落聽歌", budget: "交通: 15-30元<br>餐飲: 80-120元" },
      { day: "Day 7", theme: "海風輕拂，伴手好禮", experience: "選購沙茶麵與餡餅等伴手禮、在咖啡館整理工作後愉快返程", budget: "伴手禮: 100-200元" }
    ],
    details: [
      { title: "Day 1：抵達鷺島，漫步騎樓（中山路、唐沫茶兮）", content: "抵達後，入住交通極為便利的中山路步行街附近。這條百年老街全長1.2公里，是全廈門旅遊的樞紐與閩南騎樓建築精華。手裡拿一杯福建本土品牌「唐沫茶兮」特製的開心果系列茶飲（約RMB 13-19），買一份百年老字號「葉氏麻糍」，皮Q且不甜膩。看著華燈初上的騎樓夜景，正式融入鷺島的慢節奏生活。" },
      { title: "Day 2：琴島鼓浪，萬國風華（鼓浪嶼、葉氏麻糍）", content: "清晨從郵輪中心搭渡輪前往知名海島景點「鼓浪嶼」（船票約RMB 35-60，需提前線上訂票）。島上無動力車輛，全憑步行，保留了難得的優雅與清幽。參觀萬國歷史建築群、登日光岩俯瞰全島、漫步菽莊花園與鋼琴博物館。別忘了拜訪島上的「葉氏麻糍」老店（RMB 18/一盒6個），看師傅現場現做裹滿香脆花生與芝麻的麻糍，感受跨越百年的古早手藝。" },
      { title: "Day 3：南普陀尋幽，山海夕陽（南普陀寺、一樹一葉）", content: "早上前往唐末始建的千年古剎「南普陀寺」，環境清幽莊嚴，這裡與台灣傳統佛教同根同源，提供免費預約與贈香。參觀後，前往鄰近的中華城，點一杯福建在地品牌「一樹一葉」的奇蘭芒果烏龍手搖飲（約RMB 15-25），加入獨特阿達子（粉角），酸甜解膩。傍晚漫步「山海健康步道」，用最美視角俯瞰廈門的城市天際線與海平線日落。" },
      { title: "Day 4：環島椰風，沙坡尾夕照（環島路、沙坡尾、百家春薑母鴨）", content: "上午租單車沿著環島路騎行，途經演武大橋與黃厝沙灘，感受椰林樹影與海風徐徐。傍晚前往廈門港發源地「沙坡尾」，這是一個由百年老漁港轉型而成的文創區，融合了潮流店鋪與藝術西區，傍晚可拍到浪漫的避風港落日與夜晚霓虹。晚餐在沙坡尾品嚐連年獲得米其林必比登推薦的「百家春薑母鴨」（兩人份含菜約RMB 142），看麻油與薑片煸到焦香的鴨肉，軟嫩入味，令人垂涎。" },
      { title: "Day 5：八市煙火，閩南古早味（八市、鐘麗君滿煎糕、朱記手撕雞、芋包王）", content: "早起前往始建於1933年的「第八市場」（八市），這是廈門最古老、規模最大的傳統市場，感受最道地的生猛海鮮與市井煙火。在入口附近排隊買一份「鐘麗君滿煎糕」（約RMB 10-20），這款現點現做的閩南古早味甜點香Q軟彈。深入市場買份香氣十足的「朱記手撕雞」（約RMB 28）做為美味伴餐。中午到大元路街區拜訪傳承四代、曾獲米其林推薦的「芋包王閩南茶餐廳」（人均RMB 18-50），享用最正宗的芋包與芋泥香酥鴨。" },
      { title: "Day 6：集美學村，長堤海上列車（集美學村、十里長堤）", content: "搭乘地鐵1號線，體驗如動畫《千與千尋》般跨越藍色海平面的「海上列車」路段。抵達後前往由陳嘉庚先生創辦的「集美學村」，這裡的學校建築融合中西特色，充滿嘉庚風情與人文氣息。傍晚前往拍攝日落的絕佳位置「十里長堤」，坐在海邊草地上聽著街頭駐唱的歌聲，逛逛熱鬧的文創市集，看著海上列車緩緩駛過，極具文青浪漫氛圍。" },
      { title: "Day 7：海風輕拂，伴手好禮", content: "在海邊的精品咖啡館做最後的工作與行程整理。隨後前往八市或老字號購買餡餅、海鮮乾貨與手撕雞等廈門在地伴手禮，帶著海風的鹹甜回憶與滿滿的旅居靈感，輕鬆啟程返程。" }
    ],
    spending: [
      "住宿：思明區中山路/沙坡尾月租民居約 2000-2800 RMB，湖里或集美區約 1500-2000 RMB",
      "餐飲：在地小吃（如滿煎糕、麻糍）與米其林必比登薑母鴨極平價精緻，日均開銷約 80-150 RMB 即可大飽口福",
      "交通：地鐵、BRT 及共享單車極其便利。鼓浪嶼往返船票約 35-60 RMB（需提前線上訂票）",
      "省錢貼士：南普陀寺（免費預約）、集美學村、十里長堤與沙坡尾皆為免費參觀，性價比極高"
    ],
    prep: [
      "預訂：鼓浪嶼船票非常搶手，務必提早3-5天在「廈門輪渡+」微信小程序或官網訂票",
      "預約：南普陀寺需提早在官方小程序上進行免費預約登記並獲取免費贈香",
      "證件：小三通旅客請帶齊身分證、台胞證、護照等必要證件",
      "防曬：海濱城市紫外線極強，防曬乳、遮陽帽、墨鏡為每日必備"
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
    },
    {
      id: "xiamen",
      title: "鷺島琴聲：福建廈門",
      description: "海風、琴聲與慢生活。廈門擁有美麗的環島路與充滿萬國建築的鼓浪嶼，在沙坡尾的文創咖啡館裡，您可以伴著海浪聲開啟一天的數位辦公生活。",
      budget: "約 2,400 RMB/月",
      image: "/assets/xiamen.png",
      tags: ["海濱", "文創", "慢節奏"],
      detailData: xiamenDetail
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

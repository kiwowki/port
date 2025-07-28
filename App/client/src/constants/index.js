import worksImage1 from "../assets/img/works1_1.jpg";
import worksImage2 from "../assets/img/works1_2.jpg";
import worksImage3 from "../assets/img/works1_3.jpg";
import worksImage4 from "../assets/img/works1_4.jpg";

// export const introImg = [
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?abstract",
//     back: "시간",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?animal",
//     back: "끈기",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?visual",
//     back: "노력",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?story",
//     back: "믿음",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?space",
//     back: "정진",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?technology",
//     back: "확신",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?texture",
//     back: "체력",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?food",
//     back: "즐거움",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?interior",
//     back: "정리",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?abstract,art",
//     back: "경험",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?art",
//     back: "깨달음",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?red",
//     back: "열정",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?blue",
//     back: "신뢰",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?yellow",
//     back: "가능성",
//   },
//   {
//     src: "https://source.unsplash.com/random/150x207.63/?nature",
//     back: "실현",
//   },
// ];

const totalImages = 50;
const imageBasePath = "/intro/"; // public/intro 폴더 기준

// intro01.jpg ~ intro50.jpg
const imageFilenames = Array.from({ length: totalImages }, (_, i) =>
  `${imageBasePath}intro${String(i + 1).padStart(2, "0")}.png`
);

// 고정 텍스트 (15개)
const backTexts = [
  "시간", "끈기", "노력", "믿음", "정진",
  "확신", "체력", "즐거움", "정리", "경험",
  "깨달음", "열정", "신뢰", "가능성", "실현"
];

// 이미지 랜덤 선택 (비중복)
function getShuffledImages(count) {
  const shuffled = [...imageFilenames].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 최종 introImg 배열
export const introImg = getShuffledImages(backTexts.length).map((src, idx) => ({
  src,
  back: backTexts[idx]
}));

export const aboutTop = ["hey,", "Creative", "Developer"];

export const aboutMid = ["enhance skills", "passionate"];

// export const aboutT1 = [
//   "경찰법학을 전공으로 공부하였고, 다양한 분야의 업무를 하며 나의 적성에 맞는 일을 찾고자 노력을 했습니다.",
//   "수 년간 공무원 준비와 생계유지를 병행하다가 국비지원학원에서 약 6개월간의 여정을 시작했습니다.",
//   "아직은 서툴고 부족하다는 점을 알고 있습니다.",
// ];

// export const aboutT2 = [
//   "개발자의 세계에서의 새로운 시작은 제게 있어서 큰 도전이자 기회입니다.",
//   "과거의 경험을 통해 진정으로 하고 싶은 일이 무엇인지를 고민하던 중,",
//   "생각을 현실로 구현하고 문제를 해결하는 과정이 얼마나 재미있고 짜릿한 일인지를 깨달았습니다.",
//   "본래 저의 성향과도 잘 맞다는 생각이 들어 프론트엔드와 백엔드를 공부를 하면서 그동안 아무것도 하지 못했다는 좌절과 어려움을 극복하였고,",
//   "웹개발을 통해 새로운 미래를 꿈꾸고 있습니다.",
// ];

// export const aboutT3 = [
//   "이제는 개발에 관한 자신의 생각을 공유하고 다른 동료 개발자 꿈나무들과 함께 성장할 수 있도록 서로 도와주는 것을 좋아하게되었습니다.",
//   "여가 시간에는 개발과 관련된 영상을 시청하고, 새롭게 알게 된 것을 직접 구현해보는 것을 즐기곤 합니다.",
//   "이 도전은 제게 진정한 꿈을 추구하고 끈질기게 나아가기 위한 중요한 여정이며, 새로운 비전을 현실로 만들기 위한 시작점입니다.",
// ];

export const aboutT1 = [
  "경찰법학을 전공하고 다양한 분야의 업무를 경험하며 진정으로 몰입할 수 있는 일을 탐색했습니다.",
  "이전 직업에서 체계적인 사고와 문제 해결 능력을 길렀으며, 이를 바탕으로 웹 개발이라는 새로운 분야에 도전했습니다.",
  "새로운 지식을 익히고 실현하는 과정에서 제 적성을 발견하였고, 개발이 제가 추구하는 재미와 가치를 모두 만족시키는 일임을 확신하게 되었습니다.",
];

export const aboutT2 = [
  "초반에는 코드가 잘 떠오르지 않아 애를 먹기도 하고, 예상치 못한 문제에 부딪히며 좌절감도 느꼈습니다.",
  "하지만 포기하지 않고 효율적인 해결책을 찾아 나서는 과정에서 희열을 느꼈고, 점차 깔끔하고 견고한 코드를 작성하는 방법을 터득하게 되었습니다.",
  "단순히 기능을 구현하는 것을 넘어, 코드를 통해 문제를 본질적으로 해결하고 더 나은 사용자 경험을 제공하는 것에 집중하고 있습니다.",
];

export const aboutT3 = [
  "혼자서는 도달할 수 없는 시너지를 믿으며, 동료들과의 지식 공유와 협업을 통해 함께 성장하는 것을 중요하게 생각합니다.",
  "새로운 기술과 트렌드에 꾸준히 관심을 기울이고 있으며, 이를 실제 프로젝트에 적용하며 역량을 확장하는 데 즐거움을 느낍니다.",
  "멈추지 않는 학습과 실질적인 기여를 통해 꾸준히 발전하는 개발자가 되고자 합니다. 더 넓고 깊은 지식을 탐구하며 더 나은 결과물을 만들어낼 준비가 되어 있습니다.",
];

export const workText = [
  {
    title: "ROCK MUSIC YOUTUBE",
    span: (
      <div>
        SITE DEVELOP,
        <br />
        DESIGN
      </div>
    ),
    desc: (
      <div>
        react.js와 Sass(SCSS), YOUTUBE API를 이용하여 유명 락밴드의 노래들을 들을 수 있는 사이트를 만들었습니다.
        <br />
        오늘의 추천픽 페이지에서 10가지의 노래들을 추천받을 수 있으며,
        <br />
        검색과 동영상 재생은 물론,
        <br />
        해당 유튜브 채널의 정보와 최신 영상 목록 또한 볼 수 있습니다.
        <br />
        Swiper 기반의 반응형 캐러셀(슬라이더) 기능을 적용하여 터치 내비게이션, 자동 재생, 브레이크포인트별 레이아웃 대응 등을 구현했습니다.
        <br />
        * 데이터 로드가 안 될 경우 일일 쿼터 사용량 초과로, 태평양 표준시(PT) 자정에 재설정됩니다. *
      </div>
    ),
    nav1: "code view",
    href1: "https://github.com/kiwowki/youtube-project",
    nav2: "site view",
    href2: "https://rock-music-youtube.netlify.app",
    img: worksImage1,
  },
  {
    title: "MOVIE STAR",
    span: (
      <div>
        SITE DEVELOP,
        <br />
        DESIGN
      </div>
    ),
    desc: (
      <div>
        VUE.js와 TMDB를 사용하여 최신 영화순위와 영화의 세부정보를 보여주는
        사이트를 만들었습니다.
        <br />
        여러 카테고리의 Top12 페이지에서 영화들을 추천받을 수 있으며,
        <br />
        검색을 통해 여러 영화들을 검색할 수 있고,
        <br />
        포스터를 누르면 해당 영화의 상세 정보와 출연진을 볼 수 있습니다.
      </div>
    ),
    nav1: "code view",
    href1: "https://github.com/kiwowki/movie-project",
    nav2: "site view",
    href2: "https://movie-star-project.netlify.app/",
    img: worksImage2,
  },
  {
    title: "MY HOME",
    span: (
      <div>
        SITE DEVELOP,
        <br />
        DESIGN
      </div>
    ),
    desc: (
      <div>
        코딩의 기본개념과 여러가지 자바스크립트 효과등을 보여주는 개인
        홈페이지입니다.
        <br />
        마우스 이펙트, gsap 이펙트, 퀴즈 게임, css 속성 검색하기 등의 간단한
        자바스크립트 코드 등,
        <br />
        공부하며 배운 것들을 모두 모아놓았습니다.
      </div>
    ),
    nav1: "code view",
    href1: "https://github.com/kiwowki/webs2024",
    nav2: "site view",
    href2: "https://kiwowki.github.io/webs2024/",
    img: worksImage3,
  },
  {
    title: "GRAND TOTE",
    span: (
      <div>
        SITE DEVELOP,
        <br />
        DESIGN
      </div>
    ),
    desc: (
      <div>
        Vue3 Composition API와 style scoped CSS, translation.json 기반 i18n을 활용해 카자흐스탄·러시아·영어 3개 국어 지원 실시간 경마 베팅 웹 앱입니다.
        <br />
        CDN 호스팅 커스텀 동영상 플레이어로 실시간·녹화 경주 영상을 제공하고, Ably 베타 채팅 및 Swiper Carousel 배너로 레이스 상태(BETTING, LIVE, FINISH 등)를 시각화했습니다.
        <br />
        백엔드 API 연동을 통해 쿠폰·KYC 인증, Access/Refresh Token 보안 로그인, 배팅·입출금·히스토리, 이벤트 포인트 조회 기능 등을 구현했으며,
        <br />
        별도 관리자 사이트(Vue3)를 구축해 쿠폰 발급·팝업·회원·환불·채팅 관리까지 전 영역의 프론트엔드를 설계·유지보수했습니다.
      </div>
    ),
    nav1: "code view",
    href1: "https://github.com/kiwowki/grandtote-frontend",
    nav2: "site view",
    href2: "https://alpha-test.grandtotes.net:18080/",
    img: worksImage4,
  },
];

export const PersonalityText = [
  {
    eng: "Efficient",
    kor: "효율적인",
  },
  {
    eng: "Analytical",
    kor: "분석적인",
  },
  {
    eng: "Organized",
    kor: "조직적인",
  },
  {
    eng: "Meticulous",
    kor: "꼼꼼한",
  },
  {
    eng: "Cooperative",
    kor: "협조적인",
  },
];

export const ContactTop = ["creative", "developer", "kang seo hyeon"];
import worksImage1 from "../assets/img/works1_1.jpg";
import worksImage2 from "../assets/img/works1_2.jpg";
import worksImage3 from "../assets/img/works1_3.jpg";
import worksImage4 from "../assets/img/works1_4.jpg";

export const introImg = [
  {
    src: "https://source.unsplash.com/random/150x207.63/?abstract",
    back: "시간",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?animal",
    back: "끈기",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?visual",
    back: "노력",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?story",
    back: "믿음",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?space",
    back: "정진",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?technology",
    back: "확신",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?texture",
    back: "체력",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?food",
    back: "즐거움",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?interior",
    back: "정리",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?abstract,art",
    back: "경험",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?art",
    back: "깨달음",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?red",
    back: "열정",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?blue",
    back: "신뢰",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?yellow",
    back: "가능성",
  },
  {
    src: "https://source.unsplash.com/random/150x207.63/?nature",
    back: "실현",
  },
];

export const aboutTop = ["hey,", "Creative", "Developer"];

export const aboutMid = ["enhance skills", "passionate"];

export const aboutT1 = [
  "경찰법학을 전공으로 공부하였고, 다양한 분야의 업무를 하며 나의 적성에 맞는 일을 찾고자 노력을 했습니다.",
  "수 년간 공무원 준비와 생계유지를 병행하다가 국비지원학원에서 약 6개월간의 여정을 시작했습니다.",
  "아직은 서툴고 부족하다는 점을 알고 있습니다.",
];

export const aboutT2 = [
  "개발자의 세계에서의 새로운 시작은 제게 있어서 큰 도전이자 기회입니다.",
  "과거의 경험을 통해 진정으로 하고 싶은 일이 무엇인지를 고민하던 중,",
  "생각을 현실로 구현하고 문제를 해결하는 과정이 얼마나 재미있고 짜릿한 일인지를 깨달았습니다.",
  "본래 저의 성향과도 잘 맞다는 생각이 들어 프론트엔드와 백엔드를 공부를 하면서 그동안 아무것도 하지 못했다는 좌절과 어려움을 극복하였고,",
  "웹개발을 통해 새로운 미래를 꿈꾸고 있습니다.",
];

export const aboutT3 = [
  "이제는 개발에 관한 자신의 생각을 공유하고 다른 동료 개발자 꿈나무들과 함께 성장할 수 있도록 서로 도와주는 것을 좋아하게되었습니다.",
  "여가 시간에는 개발과 관련된 영상을 시청하고, 새롭게 알게 된 것을 직접 구현해보는 것을 즐기곤 합니다.",
  "이 도전은 제게 진정한 꿈을 추구하고 끈질기게 나아가기 위한 중요한 여정이며, 새로운 비전을 현실로 만들기 위한 시작점입니다.",
];

export const workText = [
  {
    title: "YOUTUBE API",
    span: (
      <div>
        SITE DEVELOP,
        <br />
        DESIGN
      </div>
    ),
    desc: (
      <div>
        react.js와 유튜브 API를 사용하여 유명 락밴드의 노래들을 들을 수 있는
        사이트를 만들었습니다.
        <br />
        오늘의 추천픽 페이지에서 10가지의 노래들을 추천받을 수 있으며,
        <br />
        검색과 동영상 재생은 물론,
        <br />
        해당 유튜브 채널의 정보와 최신 영상 목록 또한 볼 수 있습니다.
      </div>
    ),
    nav1: "code view",
    href1: "https://github.com/kiwowki/youtube-project",
    nav2: "site view",
    href2: "/",
    img: worksImage1,
  },
  {
    title: "MOVIE API",
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
        여러 카테고리의 Top10 페이지에서 영화들을 추천받을 수 있으며,
        <br />
        검색을 통해 여러 영화들을 검색할 수 있고,
        <br />
        포스터를 누르면 해당 영화의 상세 정보와 출연진을 볼 수 있습니다.
      </div>
    ),
    nav1: "code view",
    href1: "https://github.com/kiwowki/movie-project",
    nav2: "site view",
    href2: "/",
    img: worksImage2,
  },
  {
    title: "NODE.JS BLOG",
    span: (
      <div>
        SITE DEVELOP,
        <br />
        DESIGN
      </div>
    ),
    desc: (
      <div>
        node.js를 사용하여 이미지를 포함한 글을 작성할 수 있는 사이트를
        만들었습니다.
        <br />
        회원가입을 하면 글을 쓸 수 있으며,
        <br />
        firebase와 mongoDB를 이용해 회원 정보를 저장하였습니다.
      </div>
    ),
    nav1: "code view",
    href1: "https://github.com/kiwowki/webs2024/tree/main/php2",
    nav2: "site view",
    href2: "/",
    img: worksImage3,
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
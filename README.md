# MERN(MongoDB + Express + React + Node.js)를 이용한 포트폴리오 사이트 만들기

%% 개발 환경시 setver/config/dev.js에 비밀번호 입력하여 작업 할 것(서버환경은 netlify에 등록해놓음) %%

##### React는 Facebook에서 개발한 JavaScript 라이브러리로, 사용자 인터페이스(UI)를 구축하는 데 사용되는 오픈 소스 라이브러리입니다.

-   컴포넌트 기반 구조

리액트 앱은 작고 재사용 가능한 컴포넌트로 구성됩니다. 이 컴포넌트들은 UI 요소를 표현하며, 각 컴포넌트는 독립적으로 상태(state)와 렌더링을 관리할 수 있습니다.

-   가상 DOM(Virtual DOM)

리액트는 가상 DOM을 사용하여 웹 페이지의 업데이트를 최적화합니다. 변경된 부분만 실제 DOM에 반영하여 성능을 향상시키고 빠른 렌더링을 지원합니다.

<details>
<sub>실제 DOM(Document Object Model)에 대한 가벼운 복사본을 유지하고 이를 사용하여 효율적인 UI 업데이트를 달성하는 방법을 가리킵니다.</sub>

<sub>실제 DOM은 웹 페이지의 구조를 나타내며, 웹 페이지의 요소와 컨텐츠에 대한 프로그래밍적인 조작을 제공합니다. 하지만 실제 DOM은 변경사항을 적용하고 다시 렌더링하는 데 많은 비용과 시간이 소요됩니다. 특히 대규모 또는 동적인 웹 앱에서 이로 인해 성능 문제가 발생할 수 있습니다.</sub>

<sub>가상 DOM은 이러한 문제를 완화하기 위해 사용됩니다. 리액트에서는 가상 DOM을 사용하여 웹 페이지의 현재 상태를 나타내는 가벼운 복사본을 유지합니다. 컴포넌트의 상태 변경이 발생하면 가상 DOM에서 변경된 부분을 계산하고, 이 변경사항을 실제 DOM에 적용하기 전에 최적화된 방식으로 업데이트합니다. 이를 통해 렌더링 업데이트의 비용과 시간을 최소화하고 웹 앱의 성능을 향상시킵니다.</sub>

<sub>가상 DOM은 리액트의 성능 최적화 및 빠른 렌더링을 가능하게 하는 핵심 메커니즘 중 하나이며, 개발자가 웹 앱을 효율적으로 구축하고 유지할 수 있도록 도와줍니다.</sub>

</details>

-   단방향 데이터 흐름

리액트는 데이터의 단방향 흐름을 채택하여 데이터가 어디서 왔는지와 어디로 가는지 예측 가능하게 만듭니다. 이로써 앱의 상태 관리가 더 쉬워집니다.

-   커뮤니티와 생태계

리액트는 큰 커뮤니티와 풍부한 생태계를 가지고 있어 다양한 라이브러리와 도구를 활용할 수 있습니다. Redux, React Router, Material-UI 등과 같은 라이브러리와 플러그인이 사용 가능합니다.

-   모바일 앱 개발

React Native라는 동생 프로젝트를 통해 리액트를 사용하여 iOS 및 Android 모바일 앱을 개발할 수 있습니다.

-   싱글 페이지라 단점있음 검색이 ㄴㄴ

##### React를 사용하면 동적이고 반응형인 웹 애플리케이션을 만들 수 있으며, 컴포넌트를 조합하여 간결하고 모듈식인 코드를 작성할 수 있습니다. 이러한 특징을 활용하여 포트폴리오 웹사이트 또한 효과적으로 구축할 수 있습니다.

## 작업 순서

1. 리액트 설치(리액트의 초기 구조와 파일이 생성)
2. git에 업로드
3. [lenis 사이트](https://github.com/studio-freight/lenis)
4. 리액트 웹 사이트 완성 후 Firebase Hosting 서비스를 사용하여 호스팅

## 설치

1. react 설치 `npx create-react-app .(또는 프로젝트 이름)`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm i react-router-dom`
6. moment 설치 `npm install moment`

## git 업로드

<details>
<summary>git 업로드</summary>

`git add .`

`git status`

`git commit -m "커밋제목"`

`git push -u origin main`

</details>

### GSAP

-   GSAP(GreenSock Animation Platform)는 웹 애니메이션을 만들고 관리하기 위한 JavaScript 라이브러리로, 강력한 애니메이션 기능과 간단한 구문을 제공하여 웹사이트 및 웹 애플리케이션에 멋진 애니메이션 효과를 쉽게 추가할 수 있습니다. 애니메이션의 부드러움과 자연스러움을 유지하는 데 강점을 가지고 있습니다.

### lenis

-   lenis.js는 JavaScript로 작성된 오픈 소스 웹 프레임워크입니다. 이 프레임워크는 웹 애플리케이션 및 API를 개발하기 위해 사용됩니다. lenis.js는 경량화되고 빠른 속도로 동작하며, 간단한 문법과 구조를 제공하여 개발자가 쉽게 웹 애플리케이션을 구축할 수 있도록 도와줍니다.

### Firebase

-   Firebase는 Google의 클라우드 기반 개발 플랫폼으로, 앱 및 웹 애플리케이션을 빠르게 구축하고 호스팅, 데이터베이스 관리, 사용자 인증, 푸시 알림 등을 제공합니다. 개발자들은 Firebase를 사용하여 개발 생산성을 향상시키고, 실시간 데이터 동기화와 분석을 통해 사용자 경험을 개선할 수 있습니다. Firebase는 서버리스 아키텍처를 채용하여 백엔드 관리 부담을 줄여줍니다.
-   Firebase를 사용하여 포트폴리오 사이트를 만들면 간단하고 안정적인 웹 호스팅을 활용할 수 있습니다. Firebase Hosting을 통해 웹 페이지를 호스팅하고 Firebase의 데이터베이스 기능을 사용하여 프로젝트, 작품 또는 경험을 관리하고 표시할 수 있습니다. Firebase의 사용자 인증과 보안 규칙을 활용하여 접근 제어를 설정하고, Firebase Analytics를 통해 방문자 동작을 추적하여 포트폴리오 사이트를 개선할 수 있습니다. Firebase는 개발자에게 강력한 도구를 제공하여 포트폴리오를 프로페셔널하게 관리하고 성공적으로 전시할 수 있도록 돕습니다.

### heroku

-   heroku 회원가입
-   heroku 홈페이지에서 app 만들기
-   터미널에서 로그인

1. `heroku login` - 웹 브라우저에서 로그인
2. `heroku login -i` - 인터랙티브한 텍스트 기반 인증을 사용

-   현재의 Git 저장소를 Heroku 앱과 연결 (`heroku git:remote -a visualstories`)
-   명령어를 사용하여 코드를 Heroku에 배포 (`git push heroku main`)

    [Firebase 공식 사이트 바로가기](https://console.firebase.google.com/?hl=ko)

    ### fly.io

1.  fly.io 회원가입 및 카드 등록
2.  로컬에 fly.io 설치하기(설치 후 한 번 껐다 켜기)

```bash
iwr https://fly.io/install.ps1 -useb | iex
```

3.  `flyctl` 치기. 아래와 같이 나오면 제대로 설치된 것

```bash
PS C:\Users\line\Documents\github\react-portfolio> flyctl
This is flyctl, the Fly.io command line interface.

Usage:
  flyctl [flags]
  flyctl [command]

Here's a few commands to get you started:
  flyctl launch    Create and configure a new app from source code or a Docker image
  flyctl status    Show app status
  flyctl deploy    Deploy Fly applications
  flyctl logs      View app logs
  flyctl apps      Manage apps
  flyctl machine   Manage Fly Machines.

If you need help along the way:
  Use `fly docs` to open the Fly.io documentation, or visit https://fly.io/docs.
  Use `fly <command> --help` for more information about a command.
  Visit https://community.fly.io to get help from the Fly.io community.

For a full list of commands, run `fly help`.
```

4.  터미널에서 로그인

```bash
flyctl auth login
```

5.  app 리스트 확인하기(처음엔 아무것도 안 떠야 정상)

```bash
flyctl apps list

NAME    OWNER   STATUS  PLATFORM        LATEST DEPLOY
```

6.  `flyctl launch` 로 시작하기(high risk오류는 트러블슈팅 참고)

    1.  Do you want to tweak these settings before proceeding? 에서 y를 누르면 홈페이지 창이 뜸.
    2.  region은 한국이 없다. 가장 가까운 도쿄로 선택.
    3.  나머지는 그대로 두고 confirm 누르기.
    4.  그러면 fly.toml 등 파일이 몇 가지 생긴다.(안 생긴다면 다시 flyctl launch 쳐보기)

7.  `flyctl deploy` 로 배포하기(배포에 대한 에러는 하단의 트러블슈팅 참고)

<details>
<summary>Firebase 연동 순서</summary>****
   
1. Firebase에서 프로젝트 생성
   
2. 터미널 사용
   
   `firebase login` 후 `Y`
   
   `firebase init` 후 `Y`
   
   해당하는 옵션 선택
   
   `firebase deploy`
</details>

#### JavaScript의 getElementById VS React의 ref

-   getElementById: 이 메서드는 특정 ID를 가진 첫 번째 요소를 반환합니다. 이 메서드는 순수 JavaScript에서 DOM을 직접 조작할 때 사용됩니다.

-   Refs : 이것은 React 요소에 대한 참조를 생성하고, 생성된 참조를 통해 해당 React 요소와 연결된 실제 DOM 요소에 접근할 수 있게 해줍니다. React 컴포넌트 내에서 DOM 요소를 직접 조작해야 할 때 사용됩니다.

-   DOM : Document Object Model. 웹페이지를 프로그래밍 언어가 이용할 수 있는 구조로 만들어주는 표준 모델.

## 트러블 슈팅

<details>
<summary>heroku login 에러</summary>
Multi-Factor Authentication(MFA)가 활성화되어 있는 계정으로 로그인하려고 하는데, 기본 인증 방법(이메일과 비밀번호)으로는 지원되지 않습니다.   
대신 API 액세스를 위한 권한 부여 토큰을 생성해야 합니다.   
   
```bash
$ heroku login -i
heroku: Enter your login credentials
Email [wow_ki12@naver.com]: 
Password: **********
 »   Error: Your account has MFA enabled; API requests using basic authentication 
 »   with email and password are not supported. Please generate an authorization  
 »   token for API access.
 »
 »   Error ID: vaas_enrolled
 ```
 
해결방법   
1. Heroku 계정 설정 페이지에서 "API" 탭을 클릭하여 API Key를 생성.
2. 생성된 API Key를 복사.
3. 명령 프롬프트에서 heroku login -i 명령어를 실행할 때 이메일에는 Heroku 계정 이메일을 입력하고, 비밀번호 대신에 복사한 API Key를 입력.
</details>

<details>
<summary>lenis 사용시 scroll content의 스크롤이 안 되는 에러</summary>
lenis를 사용하면 내부 스크롤 컨텐츠의 스크롤의 휠이 막혀있다.
해결하기위해서 lenis 깃허브에 있는 문서를 참고했다.

[lenis 깃허브](https://github.com/studio-freight/lenis)

해결방법

1. 스크롤을 사용하고자 하는 요소에 `data-lenis-prevent-wheel` 을 붙여준다.

```js
<div data-lenis-prevent-wheel>scroll content</div>
```

2. css에 해당 요소의 하위요소로 밑의 코드를 붙여준다.

```css
.lenis.lenis-smooth [data-lenis-prevent] {
    overscroll-behavior: contain;
}
```

</details>

<details>
<summary>chrome input의 자동완성 css 수정이 안 되는 현상</summary>
chrome 브라우저에서는 input에 자동완성을 통해 입력하면 자동으로 input의 배경색, 글자색이 변경됩니다.
이는 chrome 브라우저의 기본설정이 다음과 같이 설정되어있기 때문입니다.
브라우저별로 기본 사용자 스타일이 적용되어 있는데 이 경우 !important 로 적용되어 있기 때문에 아무리 :autofill 을 이용해 제어하려고 해도 제어가 되지 않습니다.

```scss
input:-internal-autofill-selected {
    appearance: menulist-button;
    background-image: none !important;
    background-color: -internal-light-dark(
        rgb(232, 240, 254),
        rgba(70, 90, 126, 0.4)
    ) !important;
    color: -internal-light-dark(black, white) !important;
}
```

:autofill 은 hover, active 등과 같이 선택자에 추가하는 의사 클래스로, input 요소의 값이 자동으로 채워질 때 동작합니다.

해결방법

```scss
&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus,
&:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px #000000 inset !important;
    -webkit-text-fill-color: #ffffff !important;
}
```

[참고 사이트](https://happytape.tistory.com/41)

</details>

<details>
<summary>fly.io 관련 트러블슈팅</summary>

-   fly.io 런치 시 high risk 뜨는 오류 해결방법

```bash
Your account has been marked as high risk. Please go to https://fly.io/high-risk-unlock to verify your account.
```

해결방법 - 터미널에 나와있는 대로 `https://fly.io/high-risk-unlock`에서 계정을 unlock 해주면 됨. 카드를 선택하라고 나와있는데 언락만으로 결제가 되는 게 아니니 안심.


-   failed to fetch an image or build from source 에러

```bash
Error: failed to fetch an image or build from source: app does not have a Dockerfile or buildpacks configured. See https://fly.io/docs/reference/configuration/#the-build-section
```
해결방법 -

- 빌드시 ERROR [internal] load build context 에러
  Error: failed to fetch an image or build from source: error building: failed to solve: rpc error: code = Canceled desc = grpc: the client connection is closing 이 뜨며 에러가 나는 것은 인터넷 문제일 수 있다. 내일 학원 컴퓨터로 다시 빌드해 볼 것

</details>

<details>
<summary>클론시 504 Gateway Timeout이 뜨는 에러</summary>
504 Gateway Timeout 에러는 클라이언트가 요청을 보내고 있는 서버가 프록시 서버나 게이트웨이로부터 응답을 기다리는 동안에 시간 제한(timeout)이 초과되었을 때 발생합니다. 이는 서버가 요청을 처리하는 데에 너무 많은 시간이 걸려서 발생할 수 있습니다.

해결방법 - client와 server에서 npm install을 하고 껐다 켜서 해결.
</details>

<details>
<summary>gsap 사용시 #contact 부분에서 버벅임이 발생하는 에러</summary>
스크롤을 내리다보면 #contact 부분에서 이유를 알 수 없는 버벅임이 발생한다.
이는 lenis를 끄면 사라지는데 아마 gsap와 lenis의 충돌로 인한 오류로 추청 됨.

해결방법 -

</details>

<details>
<summary>gsap 사용시 #work 부분에서 종종 적용이 안 되는 에러</summary>
새로고침 혹은 반응형 체크를 하는 중에 종종 gsap에 설정해놓은 height값(100vh)이 css의 값(300vh)으로 보여 화면이 깨지는 현상이 나타남.
해결방법

</details>

<details>
<summary>Whitespace 에러</summary>
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면,
윈도우에서는 줄 하나가 CR(Carriage Return)과 LF, 즉 CRLF로 이루어지는데
Git이 이 둘 중 어느 쪽으로 선택할지 혼란이 온 것이다.

해결방법

`git config --global core.autocrlf true` // 시스템 전체에 적용
⠀
`git config core.autocrlf true` // 해당 프로젝트에만 적용

</details>

<details>
<summary>새로고침 시 path="/"로 이동하지 않는 문제 </summary>
스크롤 라이브러리인 lenis를 사용한 포트폴리오이기 때문에 재로드 시 자동으로 맨 위로 이동하지 않음.

해결방법

lenis.scrollTo를 0으로 변경하는 function(scrollToTopImmediate)을 추가하여 수동으로 이동.
</details>
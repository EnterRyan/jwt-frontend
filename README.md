# Feature-Sliced Design
<pre>
src/
├── 0.assets
│
├── 1.app # 애플리케이션 초기화 및 전역 설정 관련 코드
│   │     # ex) PC/모바일 설정, 브라우저 라우터, tankstack Query 또는 리덕스 프로바이더 (전역컴포넌트의 느낌)
│   ├── providers/         
│   │   ├── ProtectRouterProvider.tsx  	#라우터 프로바이더
│   │   └── DarkModeProvider.tsx        #다크모드 테머 프로바이더
│   ├── styles/
│   │   ├──base.css    #초기화 css
│   │   ├──font.css    #font설정
│   │   ├──test.css    #테스트용 css
│   │   └──theme.css   #섹상 파레트css
│   └── index.tsx      #라우터 선언및 App 엔트리포인트
│
├── 2.pages/    #라우트와 연결된 최종 페이지          
│   ├── 2-1.loginPage/
│   │   ├── components/
│   │   │   └── LoginForm.tsx
│   │   ├── styles/
│   │   │   ├── login-form.css  #폼 디자인
│   │   │   └── layout.css      #로그인 전체 디자인
│   │   └ index.tsx             #로그인 페이지 진입점.
│   ├── 2-2.myPage/
│   │	├── components/
│   │	│   ├── MyPageGrid.tsx    #마이페이지 레이아웃
│   │	│   ├── inputForm.tsx     #text인풋
│   │	│   ├── SelectForm.tsx    #셀렉트 인풋
│   │	│   └── imageBox.tsx      #사진
│   │	└ index.tsx	          #마이프로필 페이지 진입점.
│   └── 2-3.AdminPage/
│       ├──components/
│       └ index.tsx         #관리자 페이지 진입점.
│
├── 3.widgets/
├── 4.Features/
│   └──auth/                 #로그인 인증&인가
│      ├── index.ts 
│      ├── api/
│      │   └──PostLogin.ts   #Post 로그인 Axios 함수 
│      └──types/
│         ├──LoginToken.ts   #엑세스 리프레시 토큰 타입
│         └──LoginData.ts    #로그인 api 파라미터 데이터 타입
├── 5.entities/
│   └──user/
│       ├── userTypes.ts     # 로그인한 사용자 정보 타입
│       └── userUtils.ts     # 마이프로필 수정 함수    
│         
└── 6.shared/     #전역에서 재사용 가능한 공통 모듈.
	├──ui/
	│  ├── layout/
	│  │	└── AppWrapper.tsx     #공통 Wrapper(배경)
	│  └── item/
	│      ├──CheckBox.tsx       #공통 체크박스
	│      ├──NormalInput.tsx    #일반 인풋 박스(text, pw)
	│      ├──SubmitButton.tsx   #공통 서브밋 버튼
	│      └──ToggleThemeBtn.tsx #다크모드, 라이트모드 스위칭 버튼
	├── hooks/
	├── utils/
	│	  └xssFilter.ts           #로그인 및 회원정보 수정의 input 필터
	└── styles/ 	
		├──check-box.css          #공통 컴포넌트 체크박스 css	
		├──common-layout.css      #공통 wrapper 디자인
		├──normal-input.css       #공통 텍스트 인풋 디자인
		├──toggle-theme-btn.css   #테마 스위치 버튼 디자인
		└──submit-button.css      #공통 서브밋 디자인
</pre>

# Apis
@react-router
@react-hook-form
@type-alias
@Axios
@Redux
@Redux-persist =>테마 적용때 사용(지금은 쿠키인데 바꿔볼예정)


# 로그인 시나리오
1. 사용자가 웹APP에 접근시 Redux가 
2. 사용자가 로그인 api를 호출시 서버는 엑세스토큰/리프레시 토큰을 발급함
3. 사용자가 웹APP서비스를 위해 API를 호출시 모든 api요청은 해더에 엑세스 토큰을 포함함
4. 웹App(react)에서 api호출중 엑세스 토큰의 exp클라임이 만료되었다면, 우선 새로 엑세스 토큰 발급API를 호출함(axios interface) 이후 정상일 경우 호출하려던 api 호출.
  =>슬라이딩 윈도우 토큰 갱신?
  =>동일한 시간에 여러 API 호출이 있을 경우, 한 번의 재발급 요청만 보내고 결과를 다른 호출에 공유.
  → 캐싱 또는 효율적인 갱신 주기 설정을 고려.(토큰 만료기간은 1일이고 매일 그날발급한 토큰만 유효하게 검증)
5. 리프레시 토큰이 만료된상태에서 라우팅을 시도시 로그아웃시킴.
	=>로그아웃 전에 만료 알림 표시(예: "세션이 만료되었습니다. 다시 로그인해주세요").또는 갱신유도
6. 로그아웃시 리프레시/엑세스 토큰 모두 소멸시킴
	=>BroadcastChannel API를 사용하여 브라우저 탭 간 상태를 동기화.?

	리프레시 토큰 갱신 전략을 잘짜야 사용자 경험&보안취약점을 막을수있다는대....


# Redux 테마 설정.
1. 테마는 기본을 LightMode를 유지한다.
2. 테마는 쿠키에 저장한다.(로컬스토리지는 너무쉬우니까...)
3. 쿠키와 테마 State를 동기화하는 initializer와 redux관련 파일생성.
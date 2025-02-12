# Feature-Sliced Design
<pre>
src/
├── 0.assets
│
├── 1.app # 애플리케이션 초기화 및 전역 설정 관련 코드
│   │     # ex) PC/모바일 설정, 브라우저 라우터, tankstack Query 또는 리덕스 프로바이더 (전역컴포넌트의 느낌)
│   ├── providers/         
│   │   └── ProtectRouterProvider.tsx  	#라우터 프로바이더
│   ├── redux/
│   │   ├── slices/
│   │   │    ├── authSlice.ts   //인증
│   │   │    └── themeSlice.ts  //테마
│   │   ├── initializer/
│   │   │    └──ThemeInitializer.tsx //새로고침용
│   │   └── reduxStore.tsx
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
│   │	  ├── components/
│   │	  │   ├── MyPageGrid.tsx    #마이페이지 레이아웃
│   │	  │   ├── inputForm.tsx     #text인풋
│   │	  │   ├── SelectForm.tsx    #셀렉트 인풋
│   │	  │   └── imageBox.tsx      #사진
│   │	  └ index.tsx	          #마이프로필 페이지 진입점.
│   └── 2-3.AdminPage/
│       ├──components/
│       └ index.tsx         #관리자 페이지 진입점.
│
├── 3.widgets/
├── 4.Features/
│   ├──auth/                 #로그인 인증&인가
│   │  ├── index.ts 
│   │  ├── api/
│   │  │   └──PostLogin.ts   #Post 로그인 Axios 함수 
│   │  └──types/
│   │     ├──LoginToken.ts   #엑세스 리프레시 토큰 타입
│   │     └──LoginData.ts    #로그인 api 파라미터 데이터 타입
│   └──theme/
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
	│   └xssFilter.ts           #로그인 및 회원정보 수정의 input 필터
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

# Redux-toolkit 핵심내용
#### 1. Slice : Redux에서 특정 상태(State)와 관련된 액션(Action) 및 리듀서(Reducer)를 한 곳에서 관리하는 개념.
	- createSlice()를 사용하여 State(상태), Action(액션), Reducer(리듀서)를 한 번에 설정함.\
	- sliceName/actionName 형식으로 Redux가 자동으로 액션 타입을 생성해줌.
```typescript
const savedTheme = getCookie("AppTheme")||"LightMode";

const initialState = {
  darkMode: savedTheme
};

const themeSlice = createSlice({
  name: "appTheme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      const newTheme = state.darkMode === "DarkMode" ? "LightMode" : "DarkMode";
      setCookie("AppTheme", newTheme, 1);
      return { ...state, darkMode: newTheme };
    },
    setThemeFromCookie: (state, action) => {
      state.darkMode = action.payload; 
    },
  },
});

export const { toggleDarkMode, setThemeFromCookie  } = themeSlice.actions;
export default themeSlice.reducer;
```

#### 2. Store : Redux에서 애플리케이션의 전역 상태(State)를 보관하는 중앙 저장소(Store).
	- configureStore()를 사용하여 Redux Store를 생성함.
	- 여러 개의 Slice(Reducer)를 포함할 수 있음.
	- Provider를 사용하여 React 애플리케이션에 Store를 연결함.
```typescript
const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
```
##### Provider로 Redux Store를 최상위 컴포넌트에 연결
```typescript
<Provider store={store}>
  <App />
</Provider>
```

#### 3. useSelector() :Redux Store에서 특정 상태를 선택(select)하여 가져오는 함수.
	- 매개변수로 선택자 함수(Selector)를 받음
	- state에는 Store에 저장된 모든 State들이 넘어오며 선택자로 실제로 사용할 값을 지정하면됨.
	- 이 함수를 사용하면 해당 컴포넌트는 Redux 상태를 구독하게 됨 (상태 변경 시 자동 리렌더링)
	- 이전 값과 동일한 경우 불필요한 리렌더링을 방지하기 위해 shallowEqual을 사용할 수 있음
```typescript
const darkMode = useSelector((state: RootState) => state.theme.darkMode, shallowEqual);
```

#### 4. dispatch() : Redux에게 액션(Action)을 전달하여 상태(State)를 변경하도록 하는 함수.
- dispatch(action)을 호출하면 Redux Store가 등록된 리듀서를 실행하여 상태를 변경함.
- 액션은 type과 payload(선택적 데이터)로 구성됨.
- useDispatch()를 사용하여 dispatch()를 호출할 수 있음.
- Redux는 액션의 type을 기준으로 적절한 리듀서를 찾아 실행함.
##### payload가 없는 액션
```typescript
const dispatch = useDispatch();
dispatch(toggleDarkMode()); 
// { type: "theme/toggleDarkMode" }
```

##### payload가 있는 액션
```typescript
const dispatch = useDispatch();
dispatch(login({ accessToken: "abc123", refreshGen: "xyz456" }));
// { type: "auth/login", payload: { accessToken: "abc123", refreshGen: "xyz456" } }
```
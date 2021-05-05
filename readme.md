# 😷 코로나 지수 알리미

[정부혁신제안 해커톤 작품](https://github.com/1Seok2/Hack-GreenSky)과 [공공데이터](https://www.data.go.kr/index.do)를 활용하여 만든 코로나 앱

- 원스토어에 배포됨 **_코로나지수_**

### 🛠 사용 기술

<img src="https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<br/>

<br/>

## 📸 앱 스크린샷

<img src="https://user-images.githubusercontent.com/49581472/111152870-95570080-85d4-11eb-8007-9ef6cb20c03c.png" width="100%" />

<br/>

<br/>

### 🐞 Run device

```bash
adb -s R39N300CZMF reverse tcp:8081 tcp:8081
```

### 🏭 Build

```bash
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
```

이후 `android studio`에서 `build>build apk`

그러면 `android/app/build/outputs/apk/debug/app-debug.apk`를 사용

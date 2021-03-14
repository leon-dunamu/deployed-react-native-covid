# covid app

### run device

```bash
adb -s R39N300CZMF reverse tcp:8081 tcp:8081
```

### build

```bash
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
```

이후 `android studio`에서 `build>build apk`

그러면 `android/app/build/outputs/apk/debug/app-debug.apk`를 사용

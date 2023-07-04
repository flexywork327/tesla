# Introduction to the Tesla App

## 📸 Screenshots

| Home Screen                            | Charging Screen                            | Settings Screen                            |
| -------------------------------------- | ------------------------------------------ | ------------------------------------------ |
| ![Home Screen](./assets/images/1.webp) | ![Charging Screen](./assets/images/4.webp) | ![Settings Screen](./assets/images/2.webp) |

## 📝 Description

This app was built using React Native with expo router and expo icons. It is a clone of the Tesla app. It is a simple app that has a home screen, a charging screen, and a settings screen. The app is built using expo and can be run on an android or ios device.

## 🚀 How to use

```sh

git clone

npm install

npm start

```

## Technologies Used

- React Native
- Expo
- Expo Vector Icons
- Expo Router

## 📝 Notes

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to create a react native project with router as default

```sh
npx create-expo-app -e with-router
```

## 📝 Expo App Services

Note: 📌 [expo.io documentation](https://docs.expo.dev/build/introduction/)

### 📂 EAS Build

- First have to login into your expo account

```sh
$ eas login
```

- Then have to configure your project

```sh
$ eas build:configure
```

- Then have to build your project for android or ios

```sh
$ eas build --platform android
```

```sh
$ eas build --platform ios
```

### 📝 EAS Build and Submit

- configure your eas.json file to build .apk file

```json
{
  "apkbuild": {
    "android": {
      "buildType": "apk"
    }
  }
}
```

- Then have to build your project for android or ios

```sh
$ eas build -p all --profile preview
```

// import React from "react";
// import { Image } from "react-native";

// import caretUp from "../assets/image/icons/caret-up.png";
// import chevronBackOutline from "../assets/image/icons/chevron-back-outline.png";
// import earthOutline from "../assets/image/icons/earth-outline.png";
// import earthSharp from "../assets/image/icons/earth-sharp.png";
// import eyedropOutline from "../assets/image/icons/eyedrop-outline.png";
// import eyedrop from "../assets/image/icons/eyedrop.png";
// import handRightOutline from "../assets/image/icons/hand-right-outline.png";
// import happyOutline from "../assets/image/icons/happy-outline.png";
// import informationCircleOutline from "../assets/image/icons/information-circle-outline.png";
// import informationCircle from "../assets/image/icons/information-circle.png";
// import navigateCircleOutline from "../assets/image/icons/navigate-circle-outline.png";
// import navigateCircle from "../assets/image/icons/navigate-circle.png";
// import newspaperOutline from "../assets/image/icons/newspaper-outline.png";
// import newsPaper from "../assets/image/icons/newspaper.png";
// import sadOutline from "../assets/image/icons/sad-outline.png";
// import refresh from "../assets/image/icons/refresh-outline.png";

// const initStyle = {
//   width: 12,
//   height: 12,
// };
// export const ReqireImage = ({ name, styles, ...props }) => {
//   let imgSrc = caretUp;
//   if (name === "caret-up") imgSrc = caretUp;
//   if (name === "chevron-back-outline") imgSrc = chevronBackOutline;
//   if (name === "earth-outline") imgSrc = earthOutline;
//   if (name === "earth-sharp") imgSrc = earthSharp;
//   if (name === "eyedrop-outline") imgSrc = eyedropOutline;
//   if (name === "eyedrop") imgSrc = eyedrop;
//   if (name === "hand-right") imgSrc = handRightOutline;
//   if (name === "happy-outline") imgSrc = happyOutline;
//   if (name === "ios-information-circle-outline")
//     imgSrc = informationCircleOutline;
//   if (name === "ios-information-circle") imgSrc = informationCircle;
//   if (name === "navigate-circle-outline") imgSrc = navigateCircleOutline;
//   if (name === "navigate-circle") imgSrc = navigateCircle;
//   if (name === "newspaper-outline") imgSrc = newspaperOutline;
//   if (name === "newspaper") imgSrc = newsPaper;
//   if (name === "sad-outline") imgSrc = sadOutline;
//   if (name === "refresh-outline") imgSrc = refresh;

//   const uris = Image.resolveAssetSource(imgSrc).uri;
//   return (
//     <Image
//       // source={require(`../assets/image/icons/${name}.png`)}
//       source={{
//         uri: uris,
//       }}
//       style={{
//         ...initStyle,
//         ...styles,
//       }}
//       {...props}
//     />
//   );
// };

import {
  // Montserrat,
  // Space_Grotesk,
  // Rubik,
  ZCOOL_QingKe_HuangYou,
} from "next/font/google";
import localFont from "next/font/local";

// export const montserrat = Montserrat({
//   weight: ["400"],
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
// });

// export const spaceGrotesk = Space_Grotesk({
//   weight: ["400"],
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
// });

// export const rubik = Rubik({
//   weight: ["400"],
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
// });

export const zcool = ZCOOL_QingKe_HuangYou({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const gliker = localFont({
  src: "../fonts/Gliker-Regular.ttf",
  weight: "400",
  display: "swap",
  preload: true,
});

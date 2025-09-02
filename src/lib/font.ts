import localfont from "next/font/local";

export const switzer = localfont({
  src: [
    {
      path: "../asset/font/Switzer/Switzer-Variable.woff",
      style: "normal",
    },
    {
      path: "../asset/font/Switzer/Switzer-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
});

export const gambarino = localfont({
  src: [
    {
      path: "../asset/font/Gambarino/Gambarino-Regular.woff",
      style: "normal",
    },
    {
      path: "../asset/font/Gambarino/Gambarino-Regular.woff2",
      style: "normal",
    },
  ],
  variable: "--font-gambarino",
});

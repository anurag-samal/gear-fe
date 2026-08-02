import "@fontsource/geist/400.css";
import "@fontsource/geist/500.css";
import "@fontsource/geist/600.css";
import "@fontsource/geist/700.css";

import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";

import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/700.css";

import "@fontsource/orbitron/500.css";
import "@fontsource/orbitron/700.css";

import "@fontsource/exo-2/500.css";
import "@fontsource/exo-2/600.css";
import "@fontsource/exo-2/700.css";

import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";


class Font {
  private static readonly FONT_GROUPS = {
    Modern: {
      logo: "Geist",
      heading: "Geist",
      body: "Geist",
    },

    Engineering: {
      logo: "IBM Plex Sans",
      heading: "IBM Plex Sans",
      body: "IBM Plex Sans",
    },

    Mechanical: {
      logo: "Rajdhani",
      heading: "Rajdhani",
      body: "IBM Plex Sans",
    },

    Industrial: {
      logo: "Orbitron",
      heading: "Exo 2",
      body: "IBM Plex Sans",
    },

    Blueprint: {
      logo: "Space Grotesk",
      heading: "Space Grotesk",
      body: "IBM Plex Sans",
    },
  } as const;

  static readonly vars = {
    logo: "var(--font-logo)",
    heading: "var(--font-heading)",
    body: "var(--font-body)",
  } as const;

  static readonly DEFAULT_FONT: keyof typeof Font.FONT_GROUPS = "Industrial";

  private constructor() {}

  private static applyFont(
    font: (typeof Font.FONT_GROUPS)[keyof typeof Font.FONT_GROUPS],
  ): void {
    const root = document.documentElement;

    root.style.setProperty("--font-logo", font.logo);
    root.style.setProperty("--font-heading", font.heading);
    root.style.setProperty("--font-body", font.body);
  }

  static apply(font: keyof typeof Font.FONT_GROUPS): void {
    Font.applyFont(Font.FONT_GROUPS[font]);
  }

  static get(font: keyof typeof Font.FONT_GROUPS = Font.DEFAULT_FONT) {
    return {
      name: font,
      ...Font.FONT_GROUPS[font],
    };
  }

  static get fonts() {
    return Font.FONT_GROUPS;
  }
}

export default Font;

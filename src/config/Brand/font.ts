import { createSignal } from "solid-js";

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

  private static readonly DEFAULT_FONT = "Mechanical";

  // eslint-disable-next-line solid/reactivity
  private static readonly fontSignal = createSignal<
    keyof typeof Font.FONT_GROUPS
  >(Font.DEFAULT_FONT);

  private static get _font() {
    return Font.fontSignal[0];
  }

  private static get _setFont() {
    return Font.fontSignal[1];
  }

  private constructor() {}

  private static applyFont(
    font: (typeof Font.FONT_GROUPS)[keyof typeof Font.FONT_GROUPS],
  ): void {
    const root = document.documentElement;

    root.style.setProperty("--font-logo", font.logo);

    root.style.setProperty("--font-heading", font.heading);

    root.style.setProperty("--font-body", font.body);
  }

  static {
    Font.applyFont(Font.FONT_GROUPS[Font._font()]);
  }

  static get font() {
    const name = Font._font();

    return {
      name,
      ...Font.FONT_GROUPS[name],
    };
  }

  static setFont(font: keyof typeof Font.FONT_GROUPS): void {
    Font._setFont(font);

    Font.applyFont(Font.FONT_GROUPS[font]);
  }
}

export default Font;

class Theme {
  private static readonly THEMES = {
    SteelBlue: {
      primary: "#3B82F6",
      primaryHover: "#2563EB",

      background: "#FAFAFA",
      surface: "#FFFFFF",
      sidebar: "#F4F4F5",

      border: "#E4E4E7",

      text: "#18181B",
      textMuted: "#52525B",

      success: "#22C55E",
      warning: "#F59E0B",
      danger: "#EF4444",
      info: "#0EA5E9",

      chart1: "#3B82F6",
      chart2: "#0EA5E9",
      chart3: "#6366F1",
      chart4: "#06B6D4",
      chart5: "#8B5CF6",
    },

    Indigo: {
      primary: "#4F46E5",
      primaryHover: "#4338CA",

      background: "#FAFAFA",
      surface: "#FFFFFF",
      sidebar: "#F4F4F5",

      border: "#E4E4E7",

      text: "#18181B",
      textMuted: "#52525B",

      success: "#22C55E",
      warning: "#F59E0B",
      danger: "#EF4444",
      info: "#0EA5E9",

      chart1: "#4F46E5",
      chart2: "#6366F1",
      chart3: "#818CF8",
      chart4: "#A78BFA",
      chart5: "#C4B5FD",
    },

    Emerald: {
      primary: "#10B981",
      primaryHover: "#059669",

      background: "#FAFAFA",
      surface: "#FFFFFF",
      sidebar: "#F4F4F5",

      border: "#E4E4E7",

      text: "#18181B",
      textMuted: "#52525B",

      success: "#22C55E",
      warning: "#F59E0B",
      danger: "#EF4444",
      info: "#0EA5E9",

      chart1: "#10B981",
      chart2: "#34D399",
      chart3: "#6EE7B7",
      chart4: "#059669",
      chart5: "#047857",
    },

    Amber: {
      primary: "#D97706",
      primaryHover: "#B45309",

      background: "#FAFAFA",
      surface: "#FFFFFF",
      sidebar: "#F4F4F5",

      border: "#E4E4E7",

      text: "#18181B",
      textMuted: "#52525B",

      success: "#22C55E",
      warning: "#F59E0B",
      danger: "#EF4444",
      info: "#0EA5E9",

      chart1: "#D97706",
      chart2: "#F59E0B",
      chart3: "#FBBF24",
      chart4: "#FCD34D",
      chart5: "#92400E",
    },

    Brass: {
      primary: "#A66E2C",
      primaryHover: "#8C5B21",

      background: "#FBF8F3",
      surface: "#FFFFFF",
      sidebar: "#F5F0E8",

      border: "#DDD3C4",

      text: "#2B241C",
      textMuted: "#6B5A47",

      success: "#22C55E",
      warning: "#F59E0B",
      danger: "#EF4444",
      info: "#0EA5E9",

      chart1: "#A66E2C",
      chart2: "#C58A42",
      chart3: "#D8B46C",
      chart4: "#8C5B21",
      chart5: "#5A3A17",
    },

    Slate: {
      primary: "#475569",
      primaryHover: "#334155",

      background: "#F8FAFC",
      surface: "#FFFFFF",
      sidebar: "#F1F5F9",

      border: "#CBD5E1",

      text: "#0F172A",
      textMuted: "#64748B",

      success: "#22C55E",
      warning: "#F59E0B",
      danger: "#EF4444",
      info: "#0EA5E9",

      chart1: "#475569",
      chart2: "#64748B",
      chart3: "#94A3B8",
      chart4: "#334155",
      chart5: "#1E293B",
    },

    Copper: {
      primary: "#B45309",
      primaryHover: "#92400E",

      background: "#FEF9F4",
      surface: "#FFFFFF",
      sidebar: "#F7EFE6",

      border: "#E7D3BF",

      text: "#3B2413",
      textMuted: "#7A5A43",

      success: "#22C55E",
      warning: "#F59E0B",
      danger: "#EF4444",
      info: "#0EA5E9",

      chart1: "#B45309",
      chart2: "#D97706",
      chart3: "#F59E0B",
      chart4: "#92400E",
      chart5: "#78350F",
    },

    Obsidian: {
      primary: "#6D28D9",
      primaryHover: "#5B21B6",

      background: "#121212",
      surface: "#1C1C1C",
      sidebar: "#18181B",

      border: "#2A2A2A",

      text: "#FAFAFA",
      textMuted: "#A1A1AA",

      success: "#22C55E",
      warning: "#F59E0B",
      danger: "#EF4444",
      info: "#38BDF8",

      chart1: "#6D28D9",
      chart2: "#8B5CF6",
      chart3: "#A78BFA",
      chart4: "#C4B5FD",
      chart5: "#DDD6FE",
    },
  } as const;

  static readonly vars = {
    primary: "var(--theme-primary)",
    primaryHover: "var(--theme-primaryHover)",

    background: "var(--theme-background)",
    surface: "var(--theme-surface)",
    sidebar: "var(--theme-sidebar)",

    border: "var(--theme-border)",

    text: "var(--theme-text)",
    textMuted: "var(--theme-textMuted)",

    success: "var(--theme-success)",
    warning: "var(--theme-warning)",
    danger: "var(--theme-danger)",
    info: "var(--theme-info)",

    chart1: "var(--theme-chart1)",
    chart2: "var(--theme-chart2)",
    chart3: "var(--theme-chart3)",
    chart4: "var(--theme-chart4)",
    chart5: "var(--theme-chart5)",
  } as const;

  static readonly DEFAULT_THEME: keyof typeof Theme.THEMES = "Indigo";

  private constructor() {}

  private static applyTheme(
    theme: (typeof Theme.THEMES)[keyof typeof Theme.THEMES],
  ): void {
    const root = document.documentElement;

    for (const [key, value] of Object.entries(theme)) {
      root.style.setProperty(`--theme-${key}`, value);
    }
  }

  static apply(theme: keyof typeof Theme.THEMES): void {
    Theme.applyTheme(Theme.THEMES[theme]);
  }

  static get(theme: keyof typeof Theme.THEMES = Theme.DEFAULT_THEME) {
    return {
      name: theme,
      ...Theme.THEMES[theme],
    };
  }

  static get themes() {
    return Theme.THEMES;
  }
}

export default Theme;

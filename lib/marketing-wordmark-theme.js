export const marketingWordmarkThemes = {
  marketing2: {
    accentColor: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.75)",
    mutedColor: "#cbd5e1",
  },
};

export function getMarketingWordmarkTheme(variant) {
  return marketingWordmarkThemes[variant] ?? marketingWordmarkThemes.marketing2;
}

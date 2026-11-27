export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "anniversary-theme";

/**
 * Inlined in <head> so it runs before first paint, avoiding a flash of the
 * wrong theme. Order: saved choice → system preference → light.
 */
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

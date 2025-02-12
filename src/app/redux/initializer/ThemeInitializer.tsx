import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCookie } from "@shared/utils/handleCookie";
import { setThemeFromCookie } from "../slices/themeSlice";

export default function ThemeInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = getCookie("AppTheme") || "LightMode";
    dispatch(setThemeFromCookie(savedTheme));
    document.documentElement.setAttribute("data-theme", savedTheme === "DarkMode" ? "dark" : "light");
  }, [dispatch]);

  return null;
}  

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCookie } from "@shared/utils/handleCookie";
import { toggleDarkMode } from "./themeSlice";

export default function ThemeInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = getCookie("AppTheme");

    document.documentElement.setAttribute("data-theme", savedTheme === "DarkMode" ? "dark" : "light");

    if (savedTheme === "DarkMode") {
      dispatch(toggleDarkMode()); // Redux 상태 갱신
    }
  }, [dispatch]);

  return null;
}
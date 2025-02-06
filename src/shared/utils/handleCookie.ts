export const getCookie = (cookieName: string): string | null => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split("=")[1] || null;
};
export const setCookie = (cookieName: string, value: string, exp: number) => {
  const date = new Date();
  if (exp !== 0) {
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = `${cookieName}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`;
  } else {
    document.cookie = `${cookieName}=${value};path=/;SameSite=Lax`;
  }
};
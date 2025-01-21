import axios from "axios";
import { LoginFormData, LoginUserData } from "../types/LoginData";

export async function PostLogin(loginData: LoginFormData): Promise<LoginUserData | undefined> {
  const URL = `${import.meta.env.VITE_API_URL}/auth/login`;
  console.log(URL);

  try {
    // headers를 세 번째 인자로 전달
    const response = await axios.post<LoginUserData>(
      URL,
      loginData,
      {
        withCredentials: true,                //쿠키 포함 요청
        headers: {
          "Content-Type": "application/json", // 헤더 추가
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        console.error("Error Response:", error.response);
        return undefined;
    } else {
      console.error("Unexpected Error:", error);
      return undefined;
    }
  }
}

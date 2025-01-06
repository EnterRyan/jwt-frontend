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
        headers: {
          "Content-Type": "application/json", // 헤더 추가
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

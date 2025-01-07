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
    if (axios.isAxiosError(error)) {
        console.error("Error Data:", error.response?.data); // 서버에서 반환된 에러 메시지
        console.error("Status Code:", error.response?.status); // 상태 코드
        console.error(error);
        return undefined;
    } else {
      console.error("Unexpected Error:", error);
      return undefined;
    }
  }
}

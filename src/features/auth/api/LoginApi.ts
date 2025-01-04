import axios from "axios";
import { LoginFormData, LoginUserData } from "../types/LoginData";

export async function PostLogin(loginData: LoginFormData): Promise<LoginUserData | undefined> {
  const URL = `${import.meta.env.VITE_API_URL}/login`;

  try {
    const response = await axios.post<LoginUserData>(URL, loginData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("PostLogin Error:", error); 
    return undefined; 
  }
}

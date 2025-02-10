export interface LoginFormData{
  userId:string;
  userPw:string;
}

export interface LoginUserData{
  refreshExpired :string;
  accessToken:string|null;
}
export const getCookie = (cookieName: string):string|undefined=>{
  const match = document.cookie.match(new RegExp(`(^| )${cookieName}=([^;]+)`));
  return match ? match[2]: undefined;
}

export const setCookie = (cookieName: string, value: string, exp:number)=>{
  const date = new Date();
  if(exp!==0){
    date.setTime(date.getTime()+exp*24*60*60*1000);
    // document.cookie = cookieName + '='+ value + ';expires='+date.toUTCString()+';path=/';
    document.cookie = `${cookieName}=${value};expires=${date.toUTCString()};path=/`;
  }
  else{
    document.cookie=`${cookieName}=${value};path=/`;
  }
}
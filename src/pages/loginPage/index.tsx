import AppWrapper from "@shared/components/Layout/AppWrapper";
import  UserIcon from 'assets/user-solid.svg';

export default function LoginPage(){
  return (
    <AppWrapper>
      <div className="login-wrap">
        <div className="thumbnail">
          <div style={{
            color: "white"
          }}>
            {/* <UserIcon width={32} height={32}/> */}
            <img width={"32px"} src={UserIcon} alt="" />
            <h3>Login</h3>
          </div>
        </div>
        <div className="login-input">
          <form>
            <input></input>
            <input></input>
            <input type="checkbox"></input>
            <button></button>
          </form>
        </div>
      </div>
    </AppWrapper>
  )
}
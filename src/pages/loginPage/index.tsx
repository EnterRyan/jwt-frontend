import AppWrapper from "@shared/components/Layout/AppWrapper";
import { ReactComponent as UserIcon } from 'assets/user-solid.svg';

export default function LoginPage(){
  return (
    <AppWrapper>
      <div className="login-wrap">
        <div className="thumbnail">
          <div>
            <UserIcon width={32} height={32}/>
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
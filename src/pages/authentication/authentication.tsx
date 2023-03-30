import {FC} from "react";
import { StyledAuthForm, StyledAuthenticationContainer } from './style'

export const AuthenticationPage:FC = ():JSX.Element => {
    return(
        <StyledAuthenticationContainer>
        <StyledAuthForm>
            <h3>
                Авторизация
            </h3>
            <input type='text' placeholder='Ваш логин' name='login'/>
            <input type='password' name='password' placeholder='Ваш пароль'/>
            <input type="email" name='email' placeholder='Ваша почта'/>
            <button>Авторизация</button>
        </StyledAuthForm>
        </StyledAuthenticationContainer>
    )
}
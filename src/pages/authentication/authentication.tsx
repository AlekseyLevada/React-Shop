import { StyledAuthForm } from './style'
import { StyledAuthenticationContainer } from './style'

export function AuthenticationPage(): JSX.Element {
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
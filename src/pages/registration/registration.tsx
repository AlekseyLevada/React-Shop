import { StyledRegForm } from './style'
import { StyledRegistrationContainer } from './style'

export function RegistrationPage(): JSX.Element {
    return(
        <StyledRegistrationContainer>
        <StyledRegForm>
            <h3>
                Регистрация
            </h3>
            <input type='text' placeholder='Ваш логин' name='login'/>
            <input type='password' name='password' placeholder='Ваш пароль'/>
            <input type="email" name='email' placeholder='Ваша почта'/>
            <button>Зарегистрироваться</button>
        </StyledRegForm>
        </StyledRegistrationContainer>
    )
}
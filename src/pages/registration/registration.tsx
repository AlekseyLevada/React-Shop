import { StyledRegForm } from './style'
import { StyledRegistrationContainer } from './style'
// import { useAppDispatch } from '../../store'
// import { createExtraActions } from '../../store/actions/goods'
import {useAppDispatch} from "../../store/hooks";

//const { regNewUser } = createExtraActions()

const formData = (e: any) => {
    e.preventDefault()
    const formDataValues = new FormData(e.target)
    const userDataObject = {
        login: formDataValues.get('login'),
        password: formDataValues.get('password'),
        email: formDataValues.get('email'),
        phone: formDataValues.get('phone'),
    }
}


export function RegistrationPage(): JSX.Element {

    const dispatch = useAppDispatch()

    return (
        <StyledRegistrationContainer>
            <StyledRegForm onSubmit={(e) => formData(e)}>
                <h3>
                    Регистрация
                </h3>
                <input type='text' placeholder='Ваш логин' name='login' />
                <input type='password' name='password' placeholder='Ваш пароль' />
                <input type="email" name='email' placeholder='Ваша почта' />
                <input type="tel" name='phone' placeholder='+7(000)-000-00-00' />
                {/*<button onClick={()=> dispatch(regNewUser)}>Зарегистрироваться</button>*/}
                <button onClick={()=> console.log('click')}>Зарегистрироваться</button>
            </StyledRegForm>
        </StyledRegistrationContainer>
    )
}
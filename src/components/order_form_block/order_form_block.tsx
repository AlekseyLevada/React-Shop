import { useRef, RefObject } from 'react'
import { iGoods, iGood, iReduxGoodsState } from '../../global_types'
import { useSelectorTyped } from '../../global_types/use_selector_type'
import { StyledForm } from './style'
import { TelegramBot } from '../../utils/telegram_bot'


export function OrderFormBlock(): JSX.Element {

    const RefForm: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null)

    const basket: iGoods = useSelectorTyped<iReduxGoodsState, iGoods>(state => state.goods.basket)

    const sendOrderMessage = (e: any) => {
        e.preventDefault()
        
        // const DataFromForm = new FormData(e.target)
        // const name = DataFromForm.get('name')
        // const phone = DataFromForm.get('phone')
        // const email = DataFromForm.get('email')

        const DataFromForm: FormData = new FormData(RefForm.current as HTMLFormElement)

        const name  = DataFromForm.get('name')
        const phone = DataFromForm.get('phone')
        const email = DataFromForm.get('email')
        
        // let messageText = `Уважаемый ${name} вы оформили заказ в iNordic - Shop`
        let messageToAdmin = `Пользователь ${name}, оформил заказ в интернет магазине iNordic - Shop. \n` 

        basket.map((good: iGood) => {
            messageToAdmin += `Товар: ${good.TITLE} в количестве ${good.QUANTITY} экземпляров. \n`
            messageToAdmin += `Свяжитесь с покупателем по телефону ${phone}, или по электронной почте ${email} \n`
        })

        TelegramBot(messageToAdmin)
    }

    return(
        <>
            <StyledForm ref={ RefForm } onSubmit={(e) => sendOrderMessage(e)}>
                <h3>
                    Форма для оформления заказа
                </h3>
                <input type="text" placeholder="Фамилия Имя" name='name'/>
                <input type="tel" placeholder="Телефон" name='phone'/>
                <input type="e-mail" placeholder="E-mail" name='email'/>
                    <input type="submit" value={'Оставить заявку'}/>
            </StyledForm>
        </>
    )
}
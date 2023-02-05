import { iGoods, iGood, iReduxGoodsState } from '../../global_types'
import { useSelectorTyped } from '../../global_types/use_selector_type'
import { StyledForm } from './style'
import { TelegramBot } from '../../utils/telegram_bot'
import { useRef } from 'react'

export function OrderFormBlock(): JSX.Element {

    const RefForm: React.RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null)

    const basket: iGoods = useSelectorTyped<iReduxGoodsState, iGoods>(state => state.goods.basket)

    const sendOrderMessage = (e: any) => {
        e.preventDefault()
        // const DataFromForm = new FormData(e.target)
        // const name = DataFromForm.get('name')
        // const phone = DataFromForm.get('phone')
        // const email = DataFromForm.get('email')

        const DataFromForm: FormData = new FormData(RefForm.current as HTMLFormElement) as FormData

        const name:  FormDataEntryValue | null = DataFromForm.get('name') 
        const phone: FormDataEntryValue | null = DataFromForm.get('phone') 
        const email: FormDataEntryValue | null = DataFromForm.get('email')

        let messageText = `Уважаемый ${name} вы оформили заказ в iNordic - Shop`

        basket.map((good: iGood) => {
            messageText += 'Товар:' + good.TITLE
            messageText += 'В количестве:' + good.QUANTITY
        })

        console.log(messageText)
        
        TelegramBot(messageText)

    }

    return(
        <>
                <h2>
                    Форма для оформления заказа
                </h2>
            <StyledForm ref = {RefForm} onSubmit={(e) => sendOrderMessage(e)}>
                <input type="text" placeholder="Фамилия Имя" name='name'/>
                <input type="tel" placeholder="Телефон" name='phone'/>
                <input type="e-mail" placeholder="E-mail" name='email'/>
                <input type="submit" value={'Оставить заявку'}/>
            </StyledForm>
        </>
    )
}
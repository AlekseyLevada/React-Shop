import { iGoods, iReduxGoodsState } from '../../global_types'
import { useSelectorTyped } from '../../global_types/use_selector_type'
import { StyledForm } from './style'
import { TelegramBot } from '../../utils/telegram_bot'

export function OrderFormBlock(): JSX.Element {

    const basket: iGoods = useSelectorTyped<iReduxGoodsState, iGoods>(state => state.goods.basket)



    const sendOrderMessage = (e: any) => {
        e.preventDefault()
        const DataFromForm = new FormData(e.target)
        const name = DataFromForm.get('name')
        const phone = DataFromForm.get('phone')
        const email = DataFromForm.get('email')

        let messageText = `Уважаемый ${name} вы оформили заказ в iNordic - Shop`

        basket.map(good => {
            messageText += 'Товар:' + good.TITLE
            messageText += 'В количестве:' + good.QUANTITY
        })
        console.log(messageText)

        TelegramBot(messageText)

    }

    return(
        <>
            <StyledForm onSubmit={(e) => sendOrderMessage(e)}>
            <h2>
            Форма для оформления заказа
        </h2>
                <input type="text" placeholder="ФИО" name='name'/>
                <input type="tel" placeholder="Телефон" name='phone'/>
                <input type="e-mail" placeholder="email" name='email'/>
                <input type="submit" value={'Оставить заявку'}/>
            </StyledForm>
        </>
    )
}
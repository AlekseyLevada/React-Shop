import { StyledGoodItem } from './style'

export function GoodItem({data}: any) : JSX.Element {
    return (
        <StyledGoodItem>
            <input type="checkbox"/>
            <h2>
                {data.TITLE}
            </h2>
            <img src={data.IMG} alt="product_image" />
            <p>
                Артикул "{data.ID}"
            </p>
            <p>
                {data.DISCR}
            </p>
            <p>
                Колличество на складе {data.COUNT}
            </p>

            <>
                <button>Подробнее</button>
                <button>В корзину</button>
            </>

        </StyledGoodItem>
    )
}
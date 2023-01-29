export function BasketItem({data}:any): JSX.Element {
    return(
        <>
            {data.TITLE}
            <img src={data.IMG} alt="basket_item_image" />
        </>
    )
}
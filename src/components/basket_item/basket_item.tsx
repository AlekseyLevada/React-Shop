import { FC } from "react";
import { useAppDispatch } from "../../main_store/hooks";
import { iGood } from "../../global_types";
import { deleteGoodFromBasket } from "../../main_store/slices/basket/basketSlice";
import {
  StyledBasketItemContainer,
  StyledBasketCloseItem,
  StyledBasketItemCard,
  StyledBasketItemTotalPrice,
  StyledCounterContainer,
  StyledIncCounterButton,
  StyledDecCounterButton,
} from "./style";

export const BasketItem: FC<iGood> = (data: iGood): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <StyledBasketItemContainer>
      <StyledBasketItemCard>
        <img src={data.IMG} alt="basket_item_image" />
        <p>{data.TITLE}</p>
        <StyledCounterContainer>
          {/*<StyledDecCounterButton disabled={data.QUANTITY === 1 ? true : false} onClick={() => dispatch(changeGoodCount('-', data))}>*/}
          {/*</StyledDecCounterButton>*/}
          <span>{data.QUANTITY}</span>
          {/*<StyledIncCounterButton onClick={() => dispatch(changeGoodCount('+', data))}>*/}
          {/*</StyledIncCounterButton>*/}
        </StyledCounterContainer>
        <p>{data.DISCR}</p>
        <StyledBasketCloseItem
          onClick={() => dispatch(deleteGoodFromBasket(data))}
        ></StyledBasketCloseItem>
      </StyledBasketItemCard>
      <StyledBasketItemTotalPrice>
        Итого: {data.TOTAL_PRICE} руб.
      </StyledBasketItemTotalPrice>
    </StyledBasketItemContainer>
  );
};

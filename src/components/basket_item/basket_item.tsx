import { FC } from "react";
import {BasketItemPropsState} from "./types/basketItemPropsState";
import { useAppDispatch } from "../../store/hooks";
import { deleteGoodFromBasket } from "../../store/slices/basket/basketSlice";
import {decrementGoodCount, incrementGoodCount} from "../../store/slices/basket/basketSlice";
import {
  StyledBasketItemContainer,
  StyledBasketCloseItem,
  StyledBasketItemCard,
  StyledBasketItemTotalPrice,
  StyledCounterContainer,
  StyledIncCounterButton,
  StyledDecCounterButton,
} from "./style";


export const BasketItem:FC<BasketItemPropsState> = (props:BasketItemPropsState): JSX.Element => {
  const {good} = props
  const dispatch = useAppDispatch();

  return (
    <StyledBasketItemContainer>
      <StyledBasketItemCard>
        <img src={good.image} alt="basket_item_image" />
        <p>{good.title}</p>
        <StyledCounterContainer>
          <StyledDecCounterButton disabled={good.quantity === 1 ? true : false} onClick={() => dispatch(decrementGoodCount(good))}>
          </StyledDecCounterButton>
          <span>{good.quantity}</span>
          <StyledIncCounterButton onClick={() => dispatch(incrementGoodCount(good))}>
          </StyledIncCounterButton>
        </StyledCounterContainer>
        <p>{good.description}</p>
        <StyledBasketCloseItem
          onClick={() => dispatch(deleteGoodFromBasket(good))}
        ></StyledBasketCloseItem>
      </StyledBasketItemCard>
      <StyledBasketItemTotalPrice>
        Итого: {good.total_price} руб.
      </StyledBasketItemTotalPrice>
    </StyledBasketItemContainer>
  );
};

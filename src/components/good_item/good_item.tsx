import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../main_store/hooks";
import { addGoodToBasket } from "../../main_store/slices/basket/basketSlice";
import { iGood } from "../../global_types";
import {
  StyledGoodItem,
  StyledButtonContainer,
  StyledImg,
  StyledTitle,
} from "./style";


export const GoodItem: FC<iGood> = (good: iGood): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <StyledGoodItem>
      <StyledTitle>{good.TITLE}</StyledTitle>
      <StyledImg src={good.IMG} alt="product_image" />
      <p>{good.DISCR}</p>
      <p>Колличество на складе {good.COUNT}</p>
      <StyledButtonContainer>
        <Link to={`/goods/${good.ID}`}>
          <button>Подробнее</button>
        </Link>
        <button onClick={() => dispatch(addGoodToBasket(good))}>
          В корзину
        </button>
      </StyledButtonContainer>
    </StyledGoodItem>
  );
};

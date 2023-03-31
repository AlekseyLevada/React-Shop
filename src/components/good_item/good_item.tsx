import {FC, useState} from "react";
import { Link } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../main_store/hooks";
import {addGoodToBasket} from "../../main_store/slices/basket/basketSlice";
import {GoodItemPropsState} from "./types/GoodsItemPropsState";
import {
  StyledGoodItem,
  StyledButtonContainer,
  StyledImg,
  StyledTitle,
} from "./style";

export const GoodItem: FC<GoodItemPropsState> = (props:GoodItemPropsState): JSX.Element => {
    const {good} = props
    const [isDisabled, setIsDisabled] = useState(false)
    const dispatch = useAppDispatch();

    const disableButton = () => {
        setIsDisabled(true)
    }

  return (
    <StyledGoodItem>
      <StyledTitle>
          {good.TITLE}
      </StyledTitle>
      <StyledImg src={good.IMG} alt="product_image" />
      <p>
          {good.DISCR}
      </p>
      <p>
          Колличество на складе {good.COUNT}
      </p>
      <StyledButtonContainer>
        <Link to={`/goods/${good.ID}`}>
          <button>Подробнее</button>
        </Link>
        <button onClick={() => {dispatch(addGoodToBasket(good)); disableButton()}} disabled={isDisabled? true : false}>
          В корзину
        </button>
      </StyledButtonContainer>
    </StyledGoodItem>
  );
};

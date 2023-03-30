import {FC, useEffect} from "react";
import goodsJSON from "../../stub/goods.json";
import { GoodItem } from "../good_item";
import { iGood } from "../../global_types";
import {useAppDispatch, useAppSelector} from "../../main_store/hooks";
import { getAsyncGoods } from "../../main_store/thunks/goodsThunk";
import {
  StyledGoodListItem,
  StyledGoodListContainer,
  StyledGoodListCardsContainer,
  StyledSearchBlock,
} from "./style";

export const GoodList:FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAsyncGoods());
  }, []);

    const goods = goodsJSON;
    //const goods = useAppSelector(state => state.goods.goodsList)

  return (
    <StyledGoodListContainer>
      <StyledSearchBlock encType="multipart/form-data" method="post">
        <input type="text" placeholder="Что вы ищите...?" name="search" />
      </StyledSearchBlock>
      <StyledGoodListCardsContainer>
        {goods.map((good: iGood, index: number) => (
          <StyledGoodListItem key={index}>
            <GoodItem {...good} />
          </StyledGoodListItem>
        ))}
      </StyledGoodListCardsContainer>
    </StyledGoodListContainer>
  );
};

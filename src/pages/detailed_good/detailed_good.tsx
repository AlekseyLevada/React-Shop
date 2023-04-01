import { FC, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import {ICoffee} from "../../global_types/coffee/ICoffee";
import {
  StyledDetailedGoodContainer,
  StyledDetailedGoodCard,
  StyledDetailedGoodButtonsContainer,
} from "./style";


export const DetailedGood:FC = ():JSX.Element => {
  const { id } = useParams();
  const goods = useAppSelector(state => state.goods.goodsList)
  const [good, setGood] = useState<ICoffee>({
    id: null,
    title: '',
    description: '',
    price: null,
    image: '',
  })

  useEffect(() => {
    goods.map((good:ICoffee) => {
      if (good.id === Number(id)) {
        setGood(good)
      }
    })
  }, []);

  return (
    <StyledDetailedGoodContainer>
      <StyledDetailedGoodCard>
        <div>
          <img src={good.image} alt="good_image" />
        </div>
        <div>
          <h2>{good.title}</h2>
          <h3>{good.description}</h3>
          <h3>Цена: {good.price}</h3>
          <StyledDetailedGoodButtonsContainer>
            <Link to={`/`}>
              <button>Назад к списку</button>
            </Link>
          </StyledDetailedGoodButtonsContainer>
        </div>
      </StyledDetailedGoodCard>
    </StyledDetailedGoodContainer>
  );
};

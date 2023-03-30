import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledNavbar, StyledNavbarLinks, StyledNavbarButtons } from "./style";
import { useAppSelector } from "../../main_store/hooks";

export const Navbar: FC = (): JSX.Element => {

  const basket = useAppSelector((state) => state.basket.basket);

  return (
    <StyledNavbar>
      <StyledNavbarLinks>
        <Link to={"/"}>Товары</Link>
        <Link to={"/about"}>О нас</Link>
        <Link to={"/contacts"}>Контакты</Link>
      </StyledNavbarLinks>
      <h1>
        <Link to="/">
          INordic - Shop <span>.</span>
        </Link>
      </h1>
      <StyledNavbarButtons>
        <Link to={"/registration"}>
          <button>Регистрация</button>
        </Link>
        <Link to={"/authentication"}>
          <button>Авторизация</button>
        </Link>
        <Link to={"/basket"}>
          <button>Корзина ( {basket.length} )</button>
        </Link>
      </StyledNavbarButtons>
    </StyledNavbar>
  );
};

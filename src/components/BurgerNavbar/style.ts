import styled from "styled-components";
import { IBookDetails } from "../../types";
import { Color } from "../../ui";

interface ICart {
  cart: IBookDetails[];
}

export const StyledBurgerNavbar = styled.nav`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768) {
  }
`;
export const Logo = styled.button`
  margin-top: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 184px;
`;
export const HeartLogo = styled.div`
  cursor: pointer;
  color: ${Color.White};
  @media (max-width: 800px) {
    display: none;
  }
`;
export const CartLogo = styled.div<ICart>`
  width: 24px;
  height: 24px;
  color: ${({ cart }) => (cart.length > 0 ? `${Color.Red}` : `${Color.White}`)};
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const UserLogo = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`;

import styled from "styled-components";
import { Color, Space } from "../../ui";

interface IProps {
  open?: boolean;
}

export const StyledBurger = styled.div<IProps>`
  @media (max-width: 800px) {
    position: fixed;
    top: 28px;
    right: 60px;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
    background: transparent;
    width: ${Space.Medium};
    height: ${Space.Medium};
    margin-left: ${Space.Medium};
  }

  div {
    display: flex;
    width: 33px;
    height: 2px;
    background: ${({ open }) => (open ? `${Color.Black}` : `${Color.Black}`)};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.4s linear;
    cursor: pointer;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

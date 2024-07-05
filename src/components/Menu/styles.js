import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  z-index: 999;
  transition: left 0.3s ease;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 5.6rem 2.8rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600 };

  > h1 {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;

export const Main = styled.div`
  margin: 3.6rem 2.8rem;

  > ul {
    margin-top: 3.6rem;
  }

  > ul > li {
    padding: 1rem;
    font-size: 2.4rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000 };
  }
`;




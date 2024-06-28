import styled from "styled-components";

export const Container = styled.div`
  max-width: 304px;
  background-color: ${({ theme }) => theme.COLORS.DARK_200 };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  gap: 1.6rem;

  > h1 {
    font-size: 2.4rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
  }

  > h2 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.CAKE_100 };
    font-weight: 400;
  }
`;

export const Dish = styled.div`
  position: relative;
  > img {
    width: 180px;
    height: 180px;
  }

  .icon-button {
    position: absolute;
    top: 8px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;
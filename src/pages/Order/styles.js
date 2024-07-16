import styled from "styled-components";

export const Container = styled.div`
  padding: 14rem 3.6rem;

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    margin-bottom: 3.2rem;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > h2 {
    font-size: 2rem;
    font-weight: 600;
    padding: 1.6rem 0;
  }
`;

export const DishContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  gap: 1.6rem;

  > img {
    width: 10rem;
    height: 10rem;
    border-radius: 8px;
  }
`;

export const DishDetails = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-weight: 600;
  }

  .price {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400 };
    font-weight: 500;
    margin-left: 0.8rem;
  }
`;

export const DishContent = styled.div`
  display: block;
`;

export const NotFoundContainer = styled.div`
  display: grid;
  height: 100%;
  place-content: center;
  justify-content: center;
  align-items: center;

  > h1 {
    text-align: center;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-around;
`;
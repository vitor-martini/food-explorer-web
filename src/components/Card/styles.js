import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  height: 46.2rem;
  max-width: 304px;
  background-color: ${({ theme }) => theme.COLORS.DARK_200 };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  gap: 1.6rem;
  border-radius: 8px;

  > h1 {
    font-size: 2.4rem;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    width: 21rem;
    height: 29.2rem;

    > h1 {
      font-size: 1.4rem;
    }

    > h2 {
      font-size: 1.6rem;
    }
  }
`;

export const Photo = styled.div`
  > img {
    width: 180px;
    height: 180px;
    margin: 0 1.6rem;
    border-radius: 8px;
    cursor: pointer;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
      width: 88px;
      height: 88px;
    }
  }

  .icon-button {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
      flex-direction: column;
  }
`;
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  padding-top: 14rem;
  height: 100vh;
`;

export const NotFoundContainer = styled.div`
  display: grid;
  height: 100%;
  place-content: center;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
  padding-bottom: 14rem;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 30rem;
    height: 30rem;
  }

  > h1 {
    font-size: 4.2rem;
    text-align: center;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    flex-direction: column;

    > img {
      width: 20rem;
      height: 20rem;
    }

    > h1 {
      font-size: 3.6rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}px) {
    > img {
      width: 20rem;
      height: 20rem;
    }

    > h1 {
      font-size: 2.4rem;
    }
  }
`;
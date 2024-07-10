import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  padding: 14rem 8rem 16rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    padding: 14rem 2rem 16rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.6rem;
  margin-top: 3.6rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.4rem;
  margin-top: 3.6rem;

  > h1 {
    font-size: 4rem;
    font-weight: 500;
  }

  > p {
    font-size: 2.4rem;
  }

  > button {
    margin-top: 2.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    margin-top: 0rem;
    align-items: center;
    > h1 {
      font-size: 2.4rem;
    }

    > p {
      font-size: 1.6rem;
    }
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.2rem;
`;

export const Photo = styled.img`
  width: 40rem;
  height: 40rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    width: 30rem;
    height: 30rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}px) {
    width: 20rem;
    height: 20rem;
  } 
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    justify-content: center;
  }
`;
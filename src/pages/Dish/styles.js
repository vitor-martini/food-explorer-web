import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  padding: 14rem 8rem 16rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.6rem;
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
`;

export const Ingredients = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const Photo = styled.img`
  width: 30%;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
      flex-direction: column;
  }
`;
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2.4rem 0;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200 };
    font-size: 1.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    > p {
      font-size: 1.2rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 2.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    > h1 {
      font-size: 1.6rem;
    }
  }
`;
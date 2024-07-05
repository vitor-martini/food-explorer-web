import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

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
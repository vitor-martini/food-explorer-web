import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  margin: 2.8rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.8rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > h1 {
    font-size: 4.2rem;
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    > h1 {
      font-size: 3.6rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  padding: 6.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700 };
  border-radius: 16px;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    padding: 2.6rem;
  }

  > h2 {
    font-size: 3.2rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
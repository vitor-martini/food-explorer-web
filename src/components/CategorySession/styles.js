import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  padding: 4.8rem 12.4rem;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    padding: 2.4rem;
  }

  > h1 {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300 };
    font-weight: 500;
    margin-bottom: 2.4rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
      font-size: 1.8rem;
    }
  }
`;

export const CardSession = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  border-radius: 8px;
  overflow-x: auto;
`;
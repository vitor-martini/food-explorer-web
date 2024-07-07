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
  overflow: hidden;
  position: relative;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  transition: transform 0.3s ease-in-out;
  justify-content: ${({ $centerItems }) => ($centerItems ? "center" : "flex-start")};
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 4rem;
  cursor: pointer;
  z-index: 1;
  ${({ direction }) => (direction === "left" ? "left: 0;" : "right: 0;")}

  &:disabled {
    opacity: 0.5;
  }
`;

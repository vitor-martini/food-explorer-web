import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 998;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.6rem 2.8rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Notification = styled.div`
  position: absolute;
  top: -8px; 
  right: -8px; 
  background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  border-radius: 50%;
  width: 20px; 
  height: 20px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px; 
  font-weight: bold;
`;

export const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 998;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  justify-content: center;
  gap: 3.6rem;
  align-items: center;
  padding: 2.8rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}px) {
    > img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  > h1 {
    font-size: 2.4rem;
    white-space: nowrap
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}px) {
    > h1 {
      font-size: 1.6rem;
    }
  }

  > small {
    color: ${({ theme }) => theme.COLORS.CAKE_100 }; 
    font-size: 1rem;
    position: absolute;
    top: 100%; 
    right: 0;
  }
`;

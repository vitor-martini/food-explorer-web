import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 8rem;
`;

export const HeroContainer = styled.div`
  width: 100%;
  background: linear-gradient(180deg, 
    ${({ theme }) => theme.COLORS.DARK_800} 0%, 
    ${({ theme }) => theme.COLORS.DARK_900} 50%, 
    ${({ theme }) => theme.COLORS.DARK_1000} 100%
  );
  margin: 8rem 0rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 260px; 

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    height: 200px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}px) {
    height: 120px;
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const Image = styled.img`
  height: 120%; 
`;

export const Title = styled.div`
  text-align: center;
  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 500;
    font-size: 4rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    > h1 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}px) {
    > h1 {
      font-size: 1.8rem;
    }

    > p {
      font-size: 1.2rem;
    }
  }
`;

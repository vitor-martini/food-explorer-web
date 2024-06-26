import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.2rem;
  align-items: center;
  margin: 2.4rem 0;
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  > h1 {
    font-size: 2.4rem;
  }

  > small {
    color: ${({ theme }) => theme.COLORS.CAKE_100 }; 
    font-size: 1rem;
    position: absolute;
    top: 100%; 
    right: 0;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
`;
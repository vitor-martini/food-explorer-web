import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > h1 {
    font-size: 4.2rem;
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
  
  > h2 {
    font-size: 3.2rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
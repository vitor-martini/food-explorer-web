import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  justify-content: space-around;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const CardContainer = styled.div`
  padding: 6.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700 };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  border-radius: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
import styled from "styled-components";

export const Container = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100 };
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-transform: lowercase;
  font-size: 2.4rem;
  font-weight: 600;
`;
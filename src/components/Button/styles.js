import styled from "styled-components";

export const Container = styled.button`
  padding: ${({ $padding }) => $padding || "1.2rem 2.4rem"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "8px"};
  width: ${({ $width }) => $width || "auto" };
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.COLORS.TOMATO_100 };
  color: ${({ $color, theme }) => $color || theme.COLORS.LIGHT_100 };
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 0.8rem;
  white-space: nowrap
`;
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 1.2rem 1.6rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || "auto"};

  > input {
    background-color: transparent;
    border: none;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500 };
      text-align: ${({ $phTextAlign }) => $phTextAlign || "left" };
    }
  }
`;
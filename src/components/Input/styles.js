import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 1.6rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > input {
    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500 }
    }
  }
`;
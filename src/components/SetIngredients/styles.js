import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 0.6rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const InputWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_500};

  > input {
    background-color: transparent;
    border: none;
    width: 16rem;
  }
`;
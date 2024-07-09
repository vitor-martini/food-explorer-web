import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 14rem 8rem 16rem;

  > h1 {
    font-size: 3.2rem;
    font-weight: 500;
    margin-top: 2.4rem;
    margin-bottom: 3.2rem;
  }

  .saveButton {
    margin-left: auto;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: ${({ $flexOne }) => ($flexOne ? "1" : "initial")};
  gap: 1.6rem;
  margin-bottom: 3.2rem;

  > label {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > textarea {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    padding: 1.2rem 1.6rem;
    border-radius: 8px;
    resize: none;
    height: 17.2rem;
  }
`;

export const PhotoInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const PhotoInput = styled.label`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 1.2rem 3.2rem;
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  > input {
    display: none;
  }
`;
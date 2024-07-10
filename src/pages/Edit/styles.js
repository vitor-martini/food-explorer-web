import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  padding: 14rem 8rem 16rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    padding: 14rem 3.2rem 16rem;
  }

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

export const Buttons = styled.div`
 display: flex;
 gap: 1.6rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: ${({ $flexOne }) => ($flexOne ? "1" : "initial")};
  gap: 1.6rem;

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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    width: 100%;
  }
`;

export const PhotoInput = styled.label`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 1.2rem 3.2rem;
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
  width: 100%;

  cursor: pointer;
  > input {
    display: none;
  }
`;

export const PhotoInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  margin-bottom: 3.2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    flex-direction: column;
    margin-bottom: 3.2rem;
  }
`;

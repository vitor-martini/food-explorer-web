import styled from "styled-components";

export const Container = styled.div`
  width: 530px;
  height: 445px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600 };
  overflow: hidden; 
`;

export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  > button:first-child {
    border-right: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600 };
  }

  > button {
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.LIGHT_600 };
  }

  > button:first-child,
  > button:last-child {
    border-radius: 0;
  }
`;

export const Details = styled.div`
  height: 80%;
  display: grid;
  place-content: center;
`;

export const CreditCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  padding: 10rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 0.8rem;
`;

export const OrderStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
`;
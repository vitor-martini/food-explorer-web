import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  padding: 14rem 12rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}px) {
    padding: 14rem 3.6rem;
  }

  > h1 {
    font-size: 3.2rem;
    font-weight: 500;
    margin-bottom: 3.2rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    overflow: auto;
  }

  th, td {
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    text-align: left;
    padding: 1.6rem 2.4rem;
    font-size: 1.4rem;
    white-space: nowrap; 
  }

  th {
    font-weight: 700;
  }

  th:first-child, td:first-child,
  th:nth-child(2), td:nth-child(2),
  th:nth-child(4), td:nth-child(4) {
    width: 1%;
    white-space: nowrap;
  }

  th:nth-child(3), td:nth-child(3) {
    width: auto; 
  }

  .status-dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }

  .pendente {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_300};
  }

  .preparando {
    background-color: ${({ theme }) => theme.COLORS.CARROT_100};
  }

  .entregue {
    background-color: ${({ theme }) => theme.COLORS.MINT_100};
  }
`;

export const Card = styled.div`
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  padding: 1.6rem;
  margin-bottom: 1.6rem;
  border-radius: 8px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 1.6rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;
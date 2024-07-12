import styled from "styled-components";

export const Container = styled.div`
  padding: 14rem 12rem;

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
  }

  th {
    font-weight: 700;
  }

  .status-dot {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      display: inline-block;
      margin-right: 10px;
  }

  .pendente {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_300 };
  }

  .preparando {
    background-color: ${({ theme }) => theme.COLORS.CARROT_100 };
  }

  .entregue {
    background-color: ${({ theme }) => theme.COLORS.MINT_100 };
  }
`;

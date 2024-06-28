import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2.4rem 0;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200 };
    font-size: 1.4rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 1rem;

  >h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 2.4rem;
}
`;
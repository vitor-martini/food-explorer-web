import styled from "styled-components";

export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

export const ToastMessage = styled.div`
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.COLORS.TOMATO_100 };
  color: ${({ $color, theme }) => $color || theme.COLORS.LIGHT_100 };
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

export const ToastCloseButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
`;

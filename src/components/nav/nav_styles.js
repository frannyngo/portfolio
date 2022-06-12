import styled from "styled-components";

export const Nav_Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 25px;
  z-index: 2;
  position: fixed;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
  bottom: 100px;
`;

export const A = styled.a`
  color: rgb(255, 255, 255, 0.6);

  &:hover {
    color: #4db5ff;
  }
`;

export const Active_A = styled.a`
  color: #4db5ff;
`;

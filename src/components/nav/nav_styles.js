import styled from "styled-components";

export const Nav_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.3);
  padding: 25px;
  z-index: 2;
  position: fixed;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
  bottom: 100px;
  width: 250px;
`;

export const Active_A = styled.a`
  color: #4db5ff;
`;

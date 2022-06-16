import styled from "styled-components";

export const Contact_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 2000px;

  @media (max-width: 868px) {
    flex-direction: column;
  }
`;

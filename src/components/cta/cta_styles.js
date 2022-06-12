import styled from "styled-components";

export const CTA_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  position: relative;
  flex-direction: row;
  padding-top: 30px;

  @media (max-width: 450px) {
    padding-top: 30px;
    flex-direction: column;
  }
`;

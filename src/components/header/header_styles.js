import styled from "styled-components";

export const Image_Container = styled.div`
  width: 450px;
  height: 550px;
  z-index: 0;
  margin-top: 50px;
  overflow: hidden;
  margin-top: 80px;

  @media (max-width: 550px) {
    width: 350px;
    height: 500px;
  }
`;

export const Image = styled.img`
  display: flex;
  width: 450px;
  height: 550px;
  z-index: 1;
  position: absolute;
  border-top-left-radius: 255px;
  border-top-right-radius: 255px;

  @media (max-width: 550px) {
    width: 350px;
    height: 500px;
  }
`;

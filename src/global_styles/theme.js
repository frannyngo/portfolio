import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #2c2c6c;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: relative;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding: 0px;
    padding-top: 100px;
  }
`;

export const H5 = styled.h5`
    margin: 0px;
    padding 0px;
    color: white;
    margin-bottom: 5px;
    font-size: 25px;

    @media (max-width: 450px) {
        font-size: 20px;
  }
`;

export const H1 = styled.h1`
    margin: 0px;
    padding 0px;
    color: white;
    margin-bottom: 5px;
    font-size: 70px;

    @media (max-width: 450px) {
        font-size: 50px;
  }
`;

export const P = styled.p`
    margin: 0px;
    padding 0px;
    color: white;
    margin-bottom: 5px;
`;

export const Primary_Button = styled.div`
  color: #2c2c6c;
  background: #4db5ff;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: white;
    color: black;
  }

  @media (max-width: 450px) {
    width: 80%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Not_Primary_Button = styled.div`
  color: #4db5ff;
  border: 1px solid #4db5ff;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: white;
    color: black;
  }

  @media (max-width: 450px) {
    width: 80%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

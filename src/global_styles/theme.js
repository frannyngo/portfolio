import styled, { keyframes } from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fffdfa;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`;

const fade_in = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  max-width: 2000px;
  animation: ${fade_in} 1s ease-in;

  @media (max-width: 768px) {
    padding: 0px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const Container_Color = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  max-width: 2000px;
  background: #faf6f0;
  animation: ${fade_in} 1s ease-in;

  @media (max-width: 768px) {
    padding: 0px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const H5 = styled.h5`
    margin: 0px;
    padding 0px;
    color: #a6a6a6;
    margin-bottom: 5px;
    font-size: 20px;

    @media (max-width: 450px) {
        font-size: 18px;
    }
`;

export const H2 = styled.h1`
    margin: 0px;
    padding 0px;
    color: #d3ae36;
    margin-bottom: 5px;
    font-size: 40px;
    

    @media (max-width: 450px) {
        font-size: 30px;
    }
`;

export const H1 = styled.h1`
    margin: 0px;
    padding 0px;
    color: #d3ae36;
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c2c6c;
  background: #fffdfa;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #fffdfa;
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d3ae36;
  border: 1px solid #d3ae36;
  background: #fffdfa;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  text-decoration: none;
  width: 95px;

  &:hover {
    background: #faf6f0;
  }

  @media (max-width: 450px) {
    width: 80%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Box = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d3ae36;
  background: #fffdfa;
  border-radius: 10px;
  height: 60px;
  width: 60px;
  margin: 10px;
  margin-bottom: 40px;

  &:hover {
    background: #faf6f0;
  }
`;

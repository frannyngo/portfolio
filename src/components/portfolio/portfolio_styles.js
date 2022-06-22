import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const Portfolio_Container = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100vw;
  max-width: 2000px;
  animation: ${fade} 1s ease-in;
  background: pink;
  overflow-x: scroll;
`;

export const Portfolio_Container_Invisible = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-wrap: wrap;
  width: 100vw;
  max-width: 2000px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Project_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  background: #fffdfa;
  border: 2px solid #d3ae36;
  margin: 10px;
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    width: 475px;
    padding-top: 30px;
    padding-bottom: 0px;
  }

  @media (max-width: 600px) {
    width: 400px;
    padding-top: 30px;
    padding-bottom: 0px;
  }

  @media (max-width: 500px) {
    width: 375px;
    padding-top: 30px;
    padding-bottom: 0px;
  }

  @media (max-width: 400px) {
    width: 355px;
    padding-top: 30px;
    padding-bottom: 0px;
  }

  @media (max-width: 400px) {
    width: 320px;
    padding-top: 30px;
    padding-bottom: 0px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 440px;
  margin-top: 25px;
  align-items: center;

  @media (max-width: 1600px) {
    width: 380px;
  }

  @media (max-width: 1500px) {
    width: 350px;
  }

  @media (max-width: 1400px) {
    width: 300px;
  }

  @media (max-width: 1200px) {
    width: 275px;
  }

  @media (max-width: 1000px) {
    width: 250px;
  }

  @media (max-width: 900px) {
    width: 220px;
  }

  @media (max-width: 768px) {
    width: 400px;
    margin-bottom: 40px;
  }

  @media (max-width: 600px) {
    width: 325px;
  }

  @media (max-width: 400px) {
    width: 270px;
  }
`;

export const Image = styled.img`
  height: 450px;
  width: 450px;
  border-radius: 10px;

  @media (max-width: 1600px) {
    height: 375px;
    width: 375px;
  }

  @media (max-width: 1500px) {
    height: 350px;
    width: 350px;
  }

  @media (max-width: 1400px) {
    height: 325px;
    width: 325px;
  }

  @media (max-width: 1300px) {
    height: 300px;
    width: 300px;
  }

  @media (max-width: 1200px) {
    height: 275px;
    width: 275px;
  }

  @media (max-width: 1000px) {
    height: 250px;
    width: 250px;
  }

  @media (max-width: 900px) {
    height: 220px;
    width: 220px;
  }

  @media (max-width: 768px) {
    height: 350px;
    width: 380px;
  }

  @media (max-width: 600px) {
    width: 325px;
  }
  @media (max-width: 400px) {
    width: 270px;
  }
`;

export const Header = styled.h2`
  font-size: 20px;
  color: #d3ae36;
  padding: 0px;
  margin: 0px;
  margin-top: 15px;
  margin-bottom: 20px;

  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;

export const Project_Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  color: #d3ae36;
  border: 1px solid #d3ae36;
  background: #fffdfa;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  font-size: 20px;

  &:hover {
    background: #faf6f0;
  }

  @media (max-width: 1000px) {
    width: 250px;
    font-size: 15px;
    width: 80px;
    padding: 10px;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;

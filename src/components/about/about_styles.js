import styled, { keyframes } from "styled-components";

export const About_Content_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 868px) {
    flex-direction: column;
  }
`;
export const About_Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  width: 50%;
  flex-direction: column;
  padding-right: 100px;

  @media (max-width: 1258px) {
    padding-right: 20px;
  }

  @media (max-width: 1100px) {
    padding-right: 0px;
  }

  @media (max-width: 1070px) {
    margin-top: 50px;
    width: 90%;
    align-items: center;
  }
`;

export const Image_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: relative;

  @media (max-width: 868px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Cube_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1070px) {
    width: 90%;
  }

  @media (max-width: 568px) {
    flex-direction: column;
  }
`;

export const About_Cube = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 2px solid #3e3c96;
  background: #4645ab;
  border-radius: 10px;
  margin-right: 15px;
  height: 150px;
  width: 30%;

  &:hover {
    background: transparent;
  }

  @media (max-width: 1350px) {
    border: 2px solid #3e3c96;
    height: 100px;
  }

  @media (max-width: 868px) {
    margin-top: 20px;
    width: 170px;
    height: 120px;
    margin-bottom: 20px;
  }
`;

export const Header = styled.h2`
  color: white;
  font-size: 20px;
  margin-top: 15px;
  padding: 0px;

  @media (max-width: 1070px) {
    font-size: 17px;
  }
`;

export const Sub_Header = styled.p`
  color: rgb(255, 255, 255, 0.6);
  font-size: 15px;
  margin: 0px;
  padding: 0px;
  margin-top: -10px;

  @media (max-width: 1070px) {
    font-size: 12px;
  }
`;

export const Description = styled.p`
  color: rgb(255, 255, 255, 0.6);
  font-size: 20px;
  margin-top: 20px;

  @media (max-width: 1070px) {
    width: 90%;
  }

  @media (max-width: 868px) {
    flex-direction: column;
    margin-bottom: 35px;
  }
`;

export const Image_Background = styled.div`
  background: #4db5ff;
  width: 450px;
  height: 430px;
  border-radius: 25px;
  z-index: 0;

  @media (max-width: 1070px) {
    width: 320px;
    height: 300px;
  }

  @media (max-width: 868px) {
    width: 390px;
    height: 380px;
  }

  @media (max-width: 600px) {
    width: 330px;
    height: 310px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(8deg);
  }
  to {
    transform: rotate(0);
  }
`;

const rotate_restart = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(8deg);
  }
`;

export const Image = styled.img`
  display: flex;
  width: 450px;
  height: 440px;
  z-index: 1;
  position: absolute;
  border-radius: 25px;
  animation: ${rotate_restart} 0.2s linear;
  animation-fill-mode: forwards;

  &:hover {
    animation: ${rotate} 0.2s linear;
    animation-fill-mode: forwards;
  }

  @media (max-width: 1070px) {
    width: 330px;
    height: 310px;
  }

  @media (max-width: 868px) {
    width: 390px;
    height: 380px;
  }

  @media (max-width: 600px) {
    width: 330px;
    height: 310px;
  }
`;

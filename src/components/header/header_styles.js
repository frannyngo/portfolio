import styled, { keyframes } from "styled-components";

const fade_in_slide = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, 0px, 0);
  }
  to {
    opacity: 1;
        transform: translate3d(0, 0, 0);
  }
`;

const fade_in_slide_left = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100px, 0px, 0);
  }
  to {
    opacity: 1;
        transform: translate3d(0, 0, 0);
  }
`;

export const Header_Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  flex-direction: row;
  max-width: 2000px;
  width: 100vw;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const Header_CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  animation: ${fade_in_slide} 1s ease-in;

  @media (min-width: 1024px) {
    flex-direction: column;
    width: 40%;
  }
`;

export const Header_CTA_Invisible = styled.div`
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  animation: ${fade_in_slide} 1s ease-in;

  @media (min-width: 1024px) {
    flex-direction: column;
    width: 40%;
  }
`;

export const Image_Container = styled.div`
  width: 450px;
  height: 550px;
  z-index: 0;
  margin-top: 50px;
  overflow: hidden;
  margin-top: 80px;
  animation: ${fade_in_slide_left} 1s ease-in;

  @media (max-width: 550px) {
    width: 350px;
    height: 500px;
  }
`;

export const Image_Container_invisible = styled.div`
  opacity: 0;
  width: 450px;
  height: 550px;
  z-index: 0;
  margin-top: 50px;
  overflow: hidden;
  margin-top: 80px;
  animation: ${fade_in_slide_left} 1s ease-in;

  @media (max-width: 550px) {
    width: 350px;
    height: 500px;
  }
`;

export const Social_Media_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

export const Social_Media_Box_Mobile = styled.a`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border: 2px solid #d3ae36;
    background: #fffdfa;
    border-radius: 10px;
    height: 60px;
    width: 60px;
    margin: 10px;
    padding: 0px;
    margin-bottom: 40px;
  }
  &:hover {
    background: #faf6f0;
  }
`;

export const Social_Media_Box = styled.a`
  display: none;
  // box-shadow: 0px 10px 15px rgb(0, 0, 0, 0.14);

  @media (min-width: 1025px) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 2px solid #d3ae36;
  background: #fffdfa;
  border-radius: 10px;
  margin-right: 15px;
  height: 150px;
  width: 30%;

  &:hover {
    background: #faf6f0;
  }

  @media (max-width: 1350px) {
    height: 100px;
      animation: ${fade_in_slide} 1s ease-in;

  }

  @media (max-width: 868px) {
    margin-top: 20px;
    width: 170px;
    height: 120px;
    margin-bottom: 20px;
  }
`;

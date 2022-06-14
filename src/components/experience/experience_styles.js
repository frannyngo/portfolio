import styled from "styled-components";

export const Card_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Card_Shell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  background: #fffdfa;
  dius: 20px;
  height: 350px;
  margin: 20px;
  border: 2px solid #d3ae36;
  border-radius: 10px;

  @media (max-width: 1400px) {
    font-size: 17px;
  }

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 400px) {
    height: 400px;
  }
  &:hover {
    background: #faf6f0;
  }
`;

export const Header = styled.h4`
  color: #d3ae36;
  font-size: 25px;
`;

export const Skills_Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 60%;
  padding-bottom: 10px;

  @media (max-width: 1600px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 95%;
  }

  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: none;
  }
`;

export const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 40px;
  margin-left: 10px;
  width: 30%;
`;

export const Skill_Title = styled.p`
  font-size: 19px;
  color: #a6a6a6;
  margin-left: 10px;

  @media (max-width: 1500px) {
    font-size: 17px;
  }

  @media (max-width: 1300px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    font-size: 13px;
  }

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

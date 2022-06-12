import styled from "styled-components";

export const Card_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
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
  background: #4645ab;
  dius: 20px;
  height: 350px;
  margin: 20px;
  border: 2px solid #4645ab;
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

  &:hover {
    background: transparent;
  }
`;

export const Header = styled.h4`
  color: #4db5ff;
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
  color: rgb(255, 255, 255, 0.6);
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
    font-size: 11px;
  }
`;

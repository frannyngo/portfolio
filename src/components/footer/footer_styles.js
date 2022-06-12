import styled from "styled-components";

export const Footer_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding-top: 40px;
  padding-bottom: 0px;
`;

export const Link = styled.a`
  color: #2c2c6c;
  font-size: 22px;
  text-decoration: none;
  margin: 10px;
`;

export const Box = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #2c2c6c;
  height: 60px;
  width: 60px;
  margin: 10px;
  margin-bottom: 40px;

  &:hover {
    background: #4645ab;
  }
`;

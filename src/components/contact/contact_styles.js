import styled from "styled-components";

export const Contact_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 2000px;

  @media (max-width: 868px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid #d3ae36;
  width: 70%;
  padding: 50px;
  flex-direction: column;
  max-width: 600px;
  box-shadow: 0px 10px 15px rgb(0, 0, 0, 0.14);

  @media (max-width: 680px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    height: 500px;
    padding: 20px;
  }
`;

export const Send_Button = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d3ae36;
  border: 2px solid #d3ae36;
  background: #fffdfa;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  text-decoration: none;
  width: 125px;
  margin-top: 10px;

  &:hover {
    background: #faf6f0;
  }

  @media (max-width: 450px) {
    width: 93%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Label_Input = styled.label`
  color: #a6a6a6;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 450px) {
    margin-right: 5px;
  }
`;

export const Text_Input = styled.textarea`
  color: #a6a6a6;
  font-size: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 2px solid #d3ae36;
  height: 100px;
  width: 90%;
`;

export const Input_Style = styled.input`
  color: #a6a6a6;
  font-size: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 2px solid #d3ae36;
  width: 90%;
  height: 40px;
`;

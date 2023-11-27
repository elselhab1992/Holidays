import styled from "styled-components";

const FooterItems = styled.footer`
  background-color: #021221f8;
  color: #fff;
  padding: 30px 180px;
  margin-top: 100px;

  @media (min-width: 300px) {
    padding: 10px;
    margin-top: 10px;
  }

  @media (min-width: 1024px) {
    padding: 30px 180px;
    margin-top: 70px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  @media (min-width: 300px) {
    flex-wrap: wrap;
    gap: 20px;
    margin: auto;
  }
`;

const SubscribePara = styled.p`
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 10px;
  width: 70%;

  @media (min-width: 300px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

const Button = styled.button`
  width: 120px;
  padding: 8px;
  margin-left: 10px;
  font-size: 18px;
  background: transparent;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #fff;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    color: #021221f8;
    background-color: #fff;
    border: 1px solid #021221f8;
  }
`;

const Underline = styled.div`
  height: 1px;
  background-color: #fff;
  padding: 0 180px;
  margin: 30px auto;
  opacity: 0.5;
`;

const Copyrights = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 300px) {
    flex-direction: column-reverse;
    gap: 10px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export {
  Container,
  SubscribePara,
  Input,
  Button,
  Underline,
  FooterItems,
  Copyrights,
  Icons,
};

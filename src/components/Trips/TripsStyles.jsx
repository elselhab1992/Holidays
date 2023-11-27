import styled from "styled-components";

const TripsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  padding: 0 180px;

  @media (min-width: 300px) {
    padding: 10px;
    flex-direction: column;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    padding: 0 100px;
    margin: 50px auto;
    gap: 30px;
  }

  @media (min-width: 1600px) {
    padding: 0 180px;
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (min-width: 300px) {
    width: 100%;
    gap: 5px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
  }
`;

const LeftImg = styled.img`
  width: 350px;
  height: 350px;
  margin: 10px auto;
  object-fit: cover;

  @media (min-width: 300px) {
    width: 100%;
    margin: auto;
  }

  @media (min-width: 1024px) {
    margin: 10px auto;
  }
`;

const RightImg = styled.img`
  width: 350px;
  height: 225px;
  margin: 10px auto;
  object-fit: cover;

  @media (min-width: 300px) {
    width: 100%;
    margin: 5px auto;
  }

  @media (min-width: 1024px) {
    margin: 10px auto;
  }
`;

const Heading = styled.h2`
  font-size: 50px;
  font-weight: 800;

  @media (min-width: 300px) {
    font-size: 30px;
  }

  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

const Question = styled.p`
  font-weight: bold;
  margin: 20px auto;
`;

const ButtonDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

const TripsBtn = styled.button`
  width: 130px;
  padding: 7px;
  font-size: 18px;
  color: #fff;
  background-color: #000;
  border-radius: 5px;
  transition: 0.5s ease;

  &:hover {
    color: #000;
    background-color: #fff;
    cursor: pointer;
  }
`;

export {
  TripsContainer,
  ImgContainer,
  LeftImg,
  RightImg,
  Heading,
  Question,
  ButtonDiv,
  TripsBtn,
};

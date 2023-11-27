import styled from "styled-components";

const TripsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  padding: 0 180px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const LeftImg = styled.img`
  width: 350px;
  height: 350px;
  margin: 10px auto;
  object-fit: cover;
`;

const RightImg = styled.img`
  width: 350px;
  height: 225px;
  margin: 10px auto;
  object-fit: cover;
`;

const Heading = styled.h2`
  font-size: 50px;
  font-weight: 800;
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

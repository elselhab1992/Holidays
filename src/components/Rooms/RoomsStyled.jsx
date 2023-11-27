import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6293bef9;
  width: 81%;
  height: 500px;
  padding: 0 20px;
  margin: auto;
  position: relative;
`;

const Heading = styled.h3`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const ImgContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`;

const LeftImg = styled.img`
  width: 450px;
  object-fit: cover;
`;

const RightImg = styled.img`
  width: 450px;
  height: 645px;
  object-fit: cover;
`;

export { Container, ImgContainer, LeftImg, RightImg, Heading };

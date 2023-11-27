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

  @media (min-width: 300px) {
    padding: 30px 10px;
    margin: 10px auto;
    width: 100%;
    height: 300px;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1600px) {
    width: 81%;
    height: 500px;
    padding: 0 20px;
    margin: auto;
    flex-direction: row;
    gap: 70px;
  }
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

  @media (min-width: 300px) {
    width: 100%;
    flex-direction: column;
    margin-top: 20px;
  }

  @media (min-width: 1024px) {
    margin-top: 30px;
    gap: 10px;
  }

  @media (min-width: 1600px) {
    flex-direction: row;
    margin-top: 250px;
  }
`;

const LeftImg = styled.img`
  width: 450px;
  height: 300px;
  object-fit: cover;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 450px;
    margin: 0 10px;

    @media (min-width: 1600px) {
      width: 450px;
    }
  }
`;

const RightImgDiv = styled.div`
  width: 450px;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    margin: auto;
    width: 92%;
  }
`;

const RightImg = styled.img`
  width: 450px;
  height: 610px;
  object-fit: cover;

  @media (min-width: 300px) {
    height: 300px;
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }

  @media (min-width: 1600px) {
    width: 450px;
    height: 610px;
  }
`;

export { Container, ImgContainer, LeftImg, RightImg, Heading, RightImgDiv };

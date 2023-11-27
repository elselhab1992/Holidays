import styled from "styled-components";

const Container = styled.div`
  width: 81%;
  margin: auto;
  padding-top: 350px;
  position: relative;
`;

const Imgs = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
`;

const SliderBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 0;
  padding: 0 10px;
`;

const SliderArrow = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: bold;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;

export { Container, Imgs, SliderBtns, SliderArrow };

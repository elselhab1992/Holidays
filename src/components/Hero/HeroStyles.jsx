import styled from "styled-components";
import heroImg from "../../assets/hero.jpeg";

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${heroImg});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const HeroContent = styled.div`
  padding: 200px 180px;
  @media (max-width: 768px) {
  }
`;

const MainParagraph = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const MainHeading = styled.h1`
  font-size: 50px;
  font-weight: 800;
`;

const SecondaryParagraph = styled.p`
  margin: 20px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export {
  MainParagraph,
  MainHeading,
  SecondaryParagraph,
  HeroContent,
  HeroSection,
};

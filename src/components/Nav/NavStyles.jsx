import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  color: #000;
  position: relative;
  z-index: 999;
`;

const Navbar = styled.nav`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  padding: 0 10px;
  position: relative;
  @media (max-width: 1024px) {
    justify-content: space-between;
    padding: 0 30px;
  }
`;

const Logo = styled.img`
  width: 150px;
`;

const DesktopLinks = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1.5rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileLinks = styled.ul`
  list-style-type: none;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    position: absolute;
    top: 90px;
    right: 0;
    z-index: 1;
    text-align: center;
    width: 100%;
    height: 100vh;
    padding: 5rem 0;
    background-color: #fff;
    transition: 0.5s ease;
  }
`;

const ListItem = styled.a`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const MobileItem = styled(ListItem)`
  color: #000;
  cursor: pointer;
`;

const NavIcons = styled.div`
  display: none;
  color: #fff;
  @media (max-width: 1024px) {
    display: block;
    cursor: pointer;
  }
`;

export {
  Header,
  Navbar,
  Logo,
  MobileLinks,
  NavIcons,
  DesktopLinks,
  ListItem,
  MobileItem,
};

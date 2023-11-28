import { FaTimes, FaBars, FaUmbrellaBeach } from "react-icons/fa";
import {
  Header,
  Navbar,
  MobileLinks,
  NavIcons,
  DesktopLinks,
  ListItem,
  MobileItem,
} from "./NavStyles";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <Header>
      <Navbar>
        <FaUmbrellaBeach style={{ color: "#fff" }} size={70} />

        {/* desktop links */}
        <DesktopLinks>
          <li>
            <ListItem
              as={Link}
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </ListItem>
          </li>
          <li>
            <ListItem
              as={Link}
              to="trips"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              trips
            </ListItem>
          </li>
          <li>
            <ListItem
              as={Link}
              to="rooms"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              rooms
            </ListItem>
          </li>
          <li>
            <ListItem
              as={Link}
              to="food"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              food
            </ListItem>
          </li>
          <li>
            <ListItem
              as={Link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact
            </ListItem>
          </li>
        </DesktopLinks>
        <NavIcons onClick={handleNav}>
          {nav ? (
            <FaTimes size={30} onClick={closeNav} />
          ) : (
            <FaBars size={30} />
          )}
        </NavIcons>
        {/* desktop links */}
        {nav ? (
          <MobileLinks>
            <li>
              <MobileItem
                as={Link}
                to="/"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeNav}
              >
                Home
              </MobileItem>
            </li>
            <li>
              <MobileItem
                as={Link}
                to="trips"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeNav}
              >
                trips
              </MobileItem>
            </li>
            <li>
              <MobileItem
                as={Link}
                to="rooms"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeNav}
              >
                rooms
              </MobileItem>
            </li>
            <li>
              <MobileItem
                as={Link}
                to="food"
                spy={true}
                smooth={true}
                offset={700}
                duration={500}
                onClick={closeNav}
              >
                food
              </MobileItem>
            </li>
            <li>
              <MobileItem
                as={Link}
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={closeNav}
              >
                Contact
              </MobileItem>
            </li>
          </MobileLinks>
        ) : (
          <></>
        )}
      </Navbar>
    </Header>
  );
};

export default Nav;

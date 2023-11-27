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
            <ListItem href="#">Home</ListItem>
          </li>
          <li>
            <ListItem href="#">Offers</ListItem>
          </li>
          <li>
            <ListItem href="#">About</ListItem>
          </li>
          <li>
            <ListItem href="#">Contact</ListItem>
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
              <MobileItem href="#" onClick={closeNav}>
                Home
              </MobileItem>
            </li>
            <li>
              <MobileItem href="#" onClick={closeNav}>
                Offers
              </MobileItem>
            </li>
            <li>
              <MobileItem href="#" onClick={closeNav}>
                About
              </MobileItem>
            </li>
            <li>
              <MobileItem href="#" onClick={closeNav}>
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

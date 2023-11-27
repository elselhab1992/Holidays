import {
  Container,
  SubscribePara,
  Input,
  Button,
  Underline,
  FooterItems,
  Copyrights,
  Icons,
} from "./FooterStyles";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterItems>
      <Container>
        <div>
          <h3>solutions</h3>
          <p>travel</p>
          <p>Booking</p>
          <p>Flights</p>
          <p>Cruises</p>
          <p>Ground</p>
        </div>

        <div>
          <h3>Support</h3>
          <p>Pricing</p>
          <p>Documentation</p>
          <p>Tours</p>
          <p>Refunds</p>
        </div>

        <div>
          <h3>Company</h3>
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Partners</p>
        </div>

        <div>
          <h3>SUBSCRIBE TO OUR NEWSLETTERS</h3>
          <SubscribePara>
            The Latest deals, articles and resources sent to your inbox weekly.
          </SubscribePara>
          <div>
            <Input type="text" placeholder="Enter Email ..." />
            <Button>subscribe</Button>
          </div>
        </div>
      </Container>
      <Underline />
      <Copyrights>
        <p>2022 Experiences, LLC. All rights reserved</p>
        <Icons>
          <FaFacebookF size={25} />
          <FaTwitter size={25} />
          <FaInstagram size={25} />
        </Icons>
      </Copyrights>
    </FooterItems>
  );
};

export default Footer;

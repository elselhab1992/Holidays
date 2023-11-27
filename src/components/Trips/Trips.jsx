import pic1 from "../../assets/pic1.avif";
import pic2 from "../../assets/pic2.avif";
import pic3 from "../../assets/pic3.avif";
import pic4 from "../../assets/pic4.avif";
import pic5 from "../../assets/pic5.avif";

import {
  TripsContainer,
  ImgContainer,
  LeftImg,
  RightImg,
  Heading,
  Question,
  ButtonDiv,
  TripsBtn,
} from "./TripsStyles";

const Trips = () => {
  return (
    <section>
      <TripsContainer>
        {/* left */}
        <ImgContainer>
          <div>
            <LeftImg src={pic1} alt="trip" />
            <LeftImg src={pic2} alt="trip" />
          </div>
          <div>
            <RightImg src={pic3} alt="trip" />
            <RightImg src={pic4} alt="trip" />
            <RightImg src={pic5} alt="trip" />
          </div>
        </ImgContainer>
        {/* right */}
        <div>
          <Heading>Plan Your Next Trip</Heading>
          <Question>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Molestias, nam?
          </Question>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptates nostrum dolorum reprehenderit error! Doloribus est illo
            eius saepe? Molestias sapiente perspiciatis doloribus consectetur
            nihil facilis aliquid eaque vel quisquam.
          </p>
          <ButtonDiv>
            <TripsBtn>learn more</TripsBtn>
            <TripsBtn>book now</TripsBtn>
          </ButtonDiv>
        </div>
      </TripsContainer>
    </section>
  );
};

export default Trips;

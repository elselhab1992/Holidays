import room1 from "../../assets/room1.avif";
import room2 from "../../assets/room2.avif";
import room3 from "../../assets/room3.avif";
import {
  Container,
  ImgContainer,
  LeftImg,
  RightImg,
  Heading,
  RightImgDiv,
} from "./RoomsStyled";

const Rooms = () => {
  return (
    <section>
      <Container>
        {/* left */}
        <div>
          <Heading>Fine Interior Rooms</Heading>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            ipsam rerum iusto excepturi similique minus?
          </p>
        </div>
        {/* right */}
        <ImgContainer>
          <div>
            <LeftImg src={room1} alt="room" />
            <LeftImg src={room3} alt="room" />
          </div>
          <RightImgDiv>
            <RightImg src={room2} alt="room" />
          </RightImgDiv>
        </ImgContainer>
      </Container>
    </section>
  );
};

export default Rooms;

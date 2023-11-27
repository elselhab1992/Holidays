import { BookingInfo, BookingSection, BookingContainer } from "./BookingStyles";

const Booking = () => {
  return (
    <BookingSection>
      <BookingContainer>
        <BookingInfo>Booking Incentives</BookingInfo>
        <BookingInfo>Competitive Rates</BookingInfo>
        <BookingInfo>Book With Flexibility</BookingInfo>
        <BookingInfo>Trip Insurance</BookingInfo>
      </BookingContainer>
    </BookingSection>
  );
};

export default Booking;

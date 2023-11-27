import styled from "styled-components";

const BookingSection = styled.section`
  margin-top: 90vh;
`;

const BookingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin: 30px auto;

  @media (min-width: 300px) {
    padding: 0;
    flex-direction: column;
    gap: 20px;
    margin: auto;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 100px;
    margin: 30px auto;
  }
`;

const BookingInfo = styled.p`
  font-size: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export { BookingInfo, BookingSection, BookingContainer };

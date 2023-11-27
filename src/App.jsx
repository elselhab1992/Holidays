import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Booking from "./components/Booking/Booking";
import Trips from "./components/Trips/Trips";
import Rooms from "./components/Rooms/Rooms";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Booking />
      <Trips />
      <Rooms />
      <Slider />
      <Footer />
    </>
  );
}

export default App;

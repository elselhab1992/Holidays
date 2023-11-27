import Button from "../Button/Button";
import {
  MainParagraph,
  MainHeading,
  SecondaryParagraph,
  HeroContent,
  HeroSection,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <MainParagraph>All Inclusive</MainParagraph>
        <MainHeading>Private Beaches & Getaways</MainHeading>
        <SecondaryParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
          <br />
          est, id consequuntur sequi ipsum vitae sit non exercitationem.
        </SecondaryParagraph>
        <Button>Show more</Button>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

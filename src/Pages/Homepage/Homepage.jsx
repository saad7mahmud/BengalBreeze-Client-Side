import Advertisement from "../../Components/Advertisement/Advertisement";
import ReviewShow from "../../Components/ReviewShow/ReviewShow";
import FAQsSection from "../Extra/FAQsSection";
import FeatureSection from "../Extra/FeatureSection";
import YouTubeVideo from "../Extra/YouTubeVideo";
import Banner from "./Banner/Banner";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <ReviewShow></ReviewShow>
      <FeatureSection></FeatureSection>
      <FAQsSection></FAQsSection>
      <YouTubeVideo></YouTubeVideo>
    </div>
  );
};

export default Homepage;

import Header from "../../molecules/Header/Header";
import './../../../theme/text.css';
import FeaturesView from "../FeaturesView/FeaturesView";
import HeroView from "../HeroView/HeroView";

const HomeScreen = () => {
  const homeContainer = {
    paddingTop: '92px'
  };

  return (
    <div style={homeContainer}>
      <Header/>
      <HeroView/>
      <FeaturesView/>
    </div>
  )
};

export default HomeScreen;
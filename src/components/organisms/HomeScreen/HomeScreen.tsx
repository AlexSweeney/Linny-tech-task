import Header from "../../molecules/Header/Header";
import './../../../theme/text.css';
import FeaturesView from "../FeaturesView/FeaturesView";
import HeroView from "../HeroView/HeroView";
import NetworkView from "../NetworkView/NetworkView";
import colors from "../../../theme/colors";
import PricingView from "../PricingView/PricingView";
import Footer from "../../molecules/Footer/Footer";

const HomeScreen = () => {
  const homeContainer = {
    minHeight: 'calc(100vh - 92px)',
    height: '100%',
    paddingTop: '92px',
    background: colors.darkPrimary,
    display: 'flex',
    'flex-direction': 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={homeContainer}>
      <Header/>
      <HeroView/>
      <FeaturesView/>
      <NetworkView/> 
      <PricingView/>
      <Footer/>
    </div>
  )
};

export default HomeScreen;
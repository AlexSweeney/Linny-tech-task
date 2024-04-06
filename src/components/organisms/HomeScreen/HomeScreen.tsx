import Header from "../../molecules/Header/Header";
import './../../../theme/text.css';
import FeaturesView from "../FeaturesView/FeaturesView";
import HeroView from "../HeroView/HeroView";
import NetworkView from "../NetworkView/NetworkView";
import colors from "../../../theme/colors";


const HomeScreen = () => {
  const homeContainer = {
    minHeight: 'calc(100vh - 92px)',
    height: '100%',
    paddingTop: '92px',
    paddingLeft: '10px',
    paddingRight: '10px',
    background: colors.darkGrey,
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
    </div>
  )
};

export default HomeScreen;
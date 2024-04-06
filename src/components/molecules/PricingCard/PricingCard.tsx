import { ReactElement } from "react";
import BackgroundWaves from "../../../icons/BackgroundWaves";
import colors from "../../../theme/colors";

interface PricingCardProps {
  heading: ReactElement,
  children: ReactElement|ReactElement[]
}

const PricingCard = ({
  heading,
  children
}: PricingCardProps) => {
  const containerStyle = {
    height: '530px',
    width: '305px',
    display: 'flex',
    'flex-direction': 'column',
  };

  const topSectionStyle = {
    height: '50%',
    width: '100%',
    background: colors.grey,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    'text-align': 'center',
  };

  const bottomSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '100%',
    background: colors.black,
    'text-align': 'center',
  };

  const backgroundWavesStyle = {
    width: '100%',
    height: '65px',
  };

  return (
    <div style={containerStyle}>
      <div style={topSectionStyle}>
        <div>
          { heading }
        </div>
      </div>
      <div style={backgroundWavesStyle}>
        <BackgroundWaves/>
      </div>
      <div style={bottomSectionStyle}>
        { children }
      </div>
    </div>
  )
};

export default PricingCard;
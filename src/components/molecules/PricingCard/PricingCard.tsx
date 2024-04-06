import { ReactElement } from "react";
import BackgroundWaves from "../../../icons/BackgroundWaves";
import colors from "../../../theme/colors";

interface PricingCardProps {
  heading: ReactElement,
  size: 'medium'|'large',
  children: ReactElement|ReactElement[]
}

const PricingCard = ({
  heading,
  size,
  children
}: PricingCardProps) => {
  const heights = {
    'medium': '530px',
    'large': '565px'
  }

  const containerStyle = {
    height: heights[size],
    width: '305px',
    display: 'flex',
    'flex-direction': 'column',
    margin: '16px 0',
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
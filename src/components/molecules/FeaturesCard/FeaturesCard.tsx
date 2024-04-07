import { ReactElement } from "react";
import colors from "../../../theme/colors";
import './FeaturesCard.css';

interface FeaturesCardProps {
  image: ReactElement,
  children: ReactElement|ReactElement[],
}

const FeaturesCard = ({
  image,
  children
}: FeaturesCardProps) => {
  const containerStyle = {
    display: 'flex',
    position: 'relative' as 'relative',
    maxWidth: '630px',
    minWidth: '320px',
    width: '100%',
    minHeight: '325px',
    background: colors.primary,
    'box-shadow': '0 16px 16px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    margin: '20px auto',
    marginBottom: '0',
  };

  const textContainerStyle = {
    position: 'absolute' as 'absolute',
    width: '100%',
    minHeight: '100%',
    'z-index': '1000',
    display: 'flex',
    justifyContent: 'flex-start',
    'flex-direction': 'column',
  };

  const textWrapperStyle = {
    maxWidth: '315px',
    color: colors.lightPrimary,
    fontFamily: 'Inter',
    padding: '24px',
    display: 'flex',
    'flex-direction': 'column',
  };  

  const imageContainerStyle = {
    position: 'absolute' as 'absolute',
    width: '100%',
    height: '100%',
    'z-index': '0',
    display: 'flex',
    justifyContent: 'flex-end',
  }

  const imageWrapperStyle = {
    maxWidth: '315px',
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <div style={textWrapperStyle}>
          {children}
        </div>
      </div>
      <div style={imageContainerStyle}>
        <div style={imageWrapperStyle}>
          {image}
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
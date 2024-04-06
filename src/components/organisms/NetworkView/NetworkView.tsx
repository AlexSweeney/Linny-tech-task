import './../../../theme/text.css';
import Map from './../../../images/Map.png'

const NetworkView = () => {
  const containerStyle = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  }

  const textContainerStyle = {
    maxWidth: '850px',
    'text-align': 'center',
    marginBottom: '48px',
    alignText: 'center',
  };

  const imageStyle = {
    maxWidth: '1360px',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h2>Edge Network</h2>
        <p>Scale your business on the most distributed compute, security, and delivery platform — from cloud to edge. New core compute regions launched. <span className="highlight">Learn more.</span></p>
      </div>
      <img src={Map} style={imageStyle}/>
    </div>
  );
};

export default NetworkView;
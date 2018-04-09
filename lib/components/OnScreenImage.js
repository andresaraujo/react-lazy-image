import React, {Component} from 'react';

export const OnScreenImage = (props) => {
  return (
    <OnScreen>
    {({isOnscreen}) => (
        <img {...this.props} src={isOnscreen ? this.props.src : this.props.placeholderSrc}/>
    )}
    </OnScreen>
  );
}

OnScreenImage.propTypes = {
  src: PropTypes.string,
  placeholderSrc: PropTypes.string
};

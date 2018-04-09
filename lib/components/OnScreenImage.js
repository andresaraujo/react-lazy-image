import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const OnScreenImage = (props) => {
  return (
    <OnScreen>
    {({isOnscreen}) => (
        <img {...props} src={isOnscreen ? props.src : props.placeholderSrc}/>
    )}
    </OnScreen>
  );
}

OnScreenImage.propTypes = {
  src: PropTypes.string,
  placeholderSrc: PropTypes.string
};

export default OnScreenImage

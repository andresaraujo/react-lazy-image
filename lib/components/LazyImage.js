import React, {Component} from 'react';

class LazyImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lazy: true,
    }
  }
  
  componentDidMount() {
    if ("IntersectionObserver" in window) {
      const lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            lazyImageObserver.unobserve(lazyImage);
            window.setTimeout(()=> {
              this.setState({lazy: false})
            }, 5000)
          }
        });
      });

      lazyImageObserver.observe(this.imgRef);
    }
  }
  render() {
    const src = this.state.lazy ? this.props.placeholderSrc : this.props.src;
    
    return (
      <img ref={el => this.imgRef = el} {...this.props} src={src} />
    )
  }
}

LazyImage.propTypes = {
  src: PropTypes.string,
  placeholderSrc: PropTypes.string,
};

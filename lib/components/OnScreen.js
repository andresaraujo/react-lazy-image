import React from 'react';

export class OnScreen extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isOnscreen: false
      };
    }
  
    componentDidMount() {
      if ("IntersectionObserver" in window) {
        const onScreenObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const lazyImage = entry.target;
              onScreenObserver.unobserve(lazyImage);
              this.setState({ isOnscreen: true });
            }
          });
        });
  
        onScreenObserver.observe(this.offscreenRef);
      }
    }
    render() {
      return (
        <div ref={el => (this.offscreenRef = el)}>
          {this.props.children(this.state)}
        </div>
      );
    }
  }
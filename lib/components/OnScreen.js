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

  getChildProps(props = this.props) {
    const childProps = {};
    Object.keys(props).forEach(key => {
      if (!{}.hasOwnProperty.call(OnScreen.defaultProps, key)) {
        childProps[key] = props[key];
      }
    });
    return childProps;
  }

  render() {
    return (
      <div ref={el => (this.offscreenRef = el)} {...this.props}>
        {this.props.children({...this.getChildProps(), isOnscreen: this.state.isOnscreen})}
      </div>
    );
  }
}

OnScreen.defaultProps = {}

# React On Screen

Component to that makes other components aware when they are on screen (visible)

### Install

`npm i react-onscreen-component --save`

### Usage

```javascript
import OnScreen from 'react-on-screen'

const DeferredImage = (props) =>
  <OnScreen>
    {({isOnscreen}) => (
        <img {...props} src={isOnscreen ? props.src : props.placeholderSrc}/>
    )}
  </OnScreen>

```
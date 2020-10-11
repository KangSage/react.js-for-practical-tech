import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

class App extends Component {
  render() {
    // return (
    //   <MyComponent name="React" favoriteNumber={1}>
    //     리액트
    //   </MyComponent>
    // );

    // return <Counter />;

    return <Say />;
  }
}

export default App;

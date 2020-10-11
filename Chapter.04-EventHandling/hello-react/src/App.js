import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import FunctionEventPractice from './FunctionEventPractice';

class App extends Component {
  render() {
    // return (
    //   <MyComponent name="React" favoriteNumber={1}>
    //     리액트
    //   </MyComponent>
    // );

    // return <Counter />;

    // return <Say />;
    return <FunctionEventPractice />;
  }
}

export default App;

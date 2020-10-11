import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

// Function Component
// const MyComponent = ({ name, favoriteNumber, children }) => {

const MyComponent = props => {
  const { name, favoriteNumber, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

// class MyComponent extends Component {
//   // 내부 설정
//   static defaultProps = {
//     name: '스테틱 기본 이름',
//   };
//
//   static propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired,
//   };
//   render() {
//     const { name, favoriteNumber, children } = this.props;
//     return (
//       <div>
//         안녕하세요, 제 이름은 {name}입니다. <br />
//         children 값은 {children}
//         입니다.
//         <br />
//         제가 좋아하는 숫자는 {favoriteNumber}입니다.
//       </div>
//     );
//   }
// }

// 외부 설정
// MyComponent.defaultProps = {
//   name: '기본 이름',
// };
//
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;

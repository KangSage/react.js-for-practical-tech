import { Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      {/* react-router-dom v5 이전에는 Route 하나에 여러 path 지정이 힘들었음 */}
      {/*<Route path="/about" component={About} />*/}
      {/*<Route path="/info" component={About} />*/}
      {/* v5 이후로는 path에 배열로 적용하면 됨 */}
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;

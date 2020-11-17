import * as qs from 'qs';

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열의 맨 앞의 ?를 생략.
  });
  const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과는 string
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
}

export default About;

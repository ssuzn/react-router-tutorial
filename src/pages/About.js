import { useSearchParams } from 'react-router-dom';

// 쿼리스트링 예시: /articles?**page=1&keyword=react
// 주소의 뒷부분에 ? 문자열 이후에 key=value로 값을 정의하며 &로 구분하는 형태
// 키워트 검색, 페이지네이션, 정렬 방식 등 데이터 조회에 필요한 옵션 전달 시 사용

const About = () => {
  // useSearchParams : 배열 타입의 값 반환
  // 첫번째 원소는 쿼리파라미터를 조회&수정하는 메서드가 담긴 객체 반환
  // 두번째 원소는 쿼리파라미터를 객체형태로 업데이트할 수 있는 함수 반환
  const [searchParams, setSearchParams] = useSearchParams();
  // get: 특정 쿼리파라미터 조회
  // set: 특정 쿼리파라미터 업데이트
  // 쿼리파라미터 조회할 때 값은 무조건 문자열 타입
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  // useNavigate : Link 컴포넌트 사용하지 않고 다른 페이지로 이동
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    // 파라미터가 숫자 타입이면 앞으로 가거나, 뒤로 감
    // -2이면 뒤로 2번
    navigate(-1);
  };

  const goArticles = () => {
    // articles 경로로 이동
    // replace : 페이지 이동 시 현재 페이지를 페이지 기록에 남기지 않음
    // Home -> About -> articles 로 이동 후 뒤로가기 누르면 Home 페이지
    navigate('/articles', { replace: true });
  };

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
import { NavLink, Outlet } from 'react-router-dom';

// NavLink : 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우
//           특정 스타일 또는 CSS 클래스 적용
const Articles = () => {
  return (
    <div>
      {/*
      Outlet : 리액트 라우터에서 제공하는 컴포넌트로 Route의 children으로 
              들어가는 JSX 엘리먼트를 보여주는 역할
              여기선 <Route path=":id" element={<Article />} />  
              즉, 중첩된 라우트 보여주기 위함
      */}
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: 'red',
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
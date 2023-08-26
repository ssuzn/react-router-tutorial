import { useParams } from 'react-router-dom';

// URL 파라미터 예시: /profile/munz
// 주소의 경로에 유동적인 값을 넣는 형태
// ID 또는 이름을 사용하여 특정 데이터 조회 시 사용
// useParams 라는 Hook을 사용하여 객체 형태로 조회 가능
// 파라미터 이름은 라우트 설정 시 Route의 path props로 설정

const data = {
  uz: {
    name: '유지',
    description: '먼치킨 고양이',
  },
  munz: {
    name: '먼지',
    description: '코리안 숏헤어 고양이',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;


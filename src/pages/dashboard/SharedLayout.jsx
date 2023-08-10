import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <div>
      <nav>I am a navbar</nav>
      <Outlet />
    </div>
  );
};

export default SharedLayout;

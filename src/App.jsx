import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  AddJob,
  AllJobs,
  SharedLayout,
  Stats,
  Profile,
  Landing,
  Register,
  Error,
  ProtectedRoute,
} from './pages';

const App = () => {
  const app_router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <SharedLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Stats />,
        },
        {
          path: '/all-jobs',
          element: <AllJobs />,
        },
        {
          path: '/add-job',
          element: <AddJob />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/landing',
      element: <Landing />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={app_router} />
      <ToastContainer position='top-center' autoClose='2000' />
    </>
  );
};

export default App;

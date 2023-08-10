const ProtectedRoute = ({ children }) => {
  const authorized = true;
  return (
    <div>
      {authorized ? (
        children
      ) : (
        <h4>You are not authorized to view this page</h4>
      )}
    </div>
  );
};

export default ProtectedRoute;

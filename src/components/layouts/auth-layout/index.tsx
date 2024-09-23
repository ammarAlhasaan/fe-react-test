import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "redux/store";

export default function AuthLayout() {

  const isAuthenticated = useSelector((state: RootState) => state.auth.userToken !== ''); // Example selector

  if (isAuthenticated) {
    return <Navigate to="/dashboard/employee" replace/>;
  }
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm p-4">
              <div className="text-center mb-4">
                <h2 className="mb-3">Welcome</h2>
                <p>Please log in or register to continue</p>
              </div>
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

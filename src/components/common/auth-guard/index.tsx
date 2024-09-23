// AuthGuard.tsx
import React, {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "redux/store";

interface AuthGuardProps {
  children: ReactNode;
}


// Update the component to accept props
const AuthGuard: React.FC<AuthGuardProps> = ({children}) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.userToken !== ''); // Example selector

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace/>;
  }

  return <>{children}</>;
};

export default AuthGuard;

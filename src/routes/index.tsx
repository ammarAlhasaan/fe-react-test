import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {AuthLayout, DashboardLayout} from "components/layouts";
import {ErrorPage} from "components/common";
import {employeeRoute} from "pages/employee";
import {salaryRoute} from "pages/salary";
import {paymentHistoryRoute} from "pages/payment-history";
import {authRoutes} from "pages/auth";
import AuthGuard from "components/common/auth-guard";


const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: authRoutes,
  },
  {
    path: "dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ), // Wrap DashboardLayout with AuthGuard
    errorElement: <ErrorPage />,
    children: [
      employeeRoute,
      salaryRoute,
      paymentHistoryRoute,
    ],
  },
]);

export default router;

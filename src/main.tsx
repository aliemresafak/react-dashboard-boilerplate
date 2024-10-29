import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import "./i18n/config";

import DashboardLayout from "@/core/layouts/DashboardLayout";
import { ThemeProvider } from "@/core/providers/ThemeProvider";
import URLS from "@/core/urls.ts";
import ResetPasswordPage from "@/pages/Auth/ResetPassword";
import SigninPage from "@/pages/Auth/Signin";
import SignupPage from "@/pages/Auth/Signup";
import CustomerDetailPage from "@/pages/Customers/CustomerDetail";
import CustomersPage from "@/pages/Customers/Customers";
import Dashboard from "@/pages/Dashboard";
import RepairDetailPage from "@/pages/Repairs/RepairDetail";
import RepairsPage from "@/pages/Repairs/Repairs";
import SettingsPage from "@/pages/Settings/Settings";
import SparePartDetailPage from "@/pages/SpareParts/SparePartDetail";
import SparePartsPage from "@/pages/SpareParts/SpareParts";

const router = createBrowserRouter([
  { path: URLS.SIGNIN, element: <SigninPage /> },
  { path: URLS.SIGNUP, element: <SignupPage /> },
  { path: URLS.RESET_PASSWORD, element: <ResetPasswordPage /> },
  {
    path: URLS.DASHBOARD,
    element: <DashboardLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: URLS.CUSTOMERS, element: <CustomersPage /> },
      { path: URLS.CUSTOMER_DETAIL, element: <CustomerDetailPage /> },
      { path: URLS.REPAIRS, element: <RepairsPage /> },
      { path: URLS.REPAIR_DETAIL, element: <RepairDetailPage /> },
      { path: URLS.SPARE_PARTS, element: <SparePartsPage /> },
      { path: URLS.SPARE_PARTS_DETAIL, element: <SparePartDetailPage /> },
      { path: URLS.SETTINGS, element: <SettingsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

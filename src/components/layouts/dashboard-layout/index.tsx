import {SideMenu} from "../../core";
import {Outlet} from "react-router-dom";
import {FaCashRegister, FaHome, FaSignOutAlt} from 'react-icons/fa';
import {useState} from "react";
import styles from "./DashboardLayout.module.scss";
import {useDispatch} from "react-redux";
import {logout} from "_redux/auth";


export default function DashboardLayout() {
  const dispatch = useDispatch()
  const [isCollapsed, setIsCollapsed] = useState(false);
  const menuItems = [
    {label: 'Employees', icon: <FaHome/>, path: '/dashboard/employee'},
    {label: 'Salaries', icon: <FaCashRegister/>, path: '/dashboard/salary'},
    {label: 'History', icon: <FaCashRegister/>, path: '/dashboard/payment-history'},
    {
      label: 'Logout', icon: <FaSignOutAlt/>, onClick: () => {
        dispatch(logout())
      }
    },
  ];
  return (
    <div className={`${styles.dashboardLayout}`}>
      <SideMenu menuItems={menuItems} collapsed={isCollapsed} onChange={setIsCollapsed}/>
      <div id="content" className={`${styles.content} ${isCollapsed ? styles.collapsed : ''}`}>
        <Outlet/>
      </div>
    </div>
  );
}

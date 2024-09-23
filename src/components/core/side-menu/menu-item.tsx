import React, {useState} from 'react';
import styles from './SideMenu.module.scss';
import {useNavigate} from "react-router-dom";

interface MenuItemProps {
  item: {
    label: string;
    icon?: React.ReactNode;
    path?: string;
    onClick?: () => void;
    children?: MenuItemProps['item'][];
  };
  isCollapsed: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({item, isCollapsed}) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (path?: string) => {
    setIsOpen(!isOpen);
    if (item?.path) {
      navigate(item?.path)
    } else if (item.onClick) {
      item.onClick()
    }
  };

  return (
    <>
      <li className={styles.menuItem} onClick={() => handleItemClick(item.path)}>
        <div className={styles.menuItemContent}>
          {item.icon && <span className={styles.icon}>{item.icon}</span>}
          {!isCollapsed && <span className={styles.label}>{item.label}</span>}
        </div>
      </li>
    </>
  );
};

export default MenuItem;

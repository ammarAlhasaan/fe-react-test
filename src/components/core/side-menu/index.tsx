import React, {useState} from 'react';
import styles from './SideMenu.module.scss';
import MenuItem from './menu-item';

interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: MenuItemProps[];
}

interface SideMenuProps {
  menuItems: MenuItemProps[];
  collapsed?: boolean;
  onChange?: (isCollapsed: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({menuItems, collapsed = false, onChange}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    onChange?.(!isCollapsed);
  };

  return (
    <div className={`${styles.sideMenu} ${isCollapsed ? styles.collapsed : ''}`}>
      <button className={styles.toggleButton} onClick={handleToggle}>
        {isCollapsed ? '→' : '←'}
      </button>
      <ul className={styles.menuList}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} isCollapsed={isCollapsed}/>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;

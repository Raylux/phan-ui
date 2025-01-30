import { ReactNode } from 'react';
import styles from './navbar.module.css';

type NavbarProps = {
  title?: string;
  textColor?: string;
  bgColor?: string;
  children?: ReactNode;
}

export const Navbar = ({title, textColor = "white", bgColor = "black", children}: NavbarProps) => {

  const navbarStyle = (textColor: string, bgColor: string) => ({
    color: textColor,
    backgroundColor: bgColor,
  });

  return (
    <div className={styles['navbar']} style={navbarStyle(textColor, bgColor)}>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}

export default Navbar;

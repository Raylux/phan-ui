import React from 'react';
import styles from './header.module.css';

type HeaderProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  color?: string;
  children: React.ReactNode;
}

export const Header = ({ size, color = 'black', children }: HeaderProps) => {

  const checkSize = () => {
    switch (size) {
      case "xs":
        return "h6";
      case "sm":
        return "h5";
      case "md":
        return "h4";
      case "lg":
        return "h3";
      case "xl":
        return "h2";
      case "2xl":
        return "h1";
    }
  }
  const Tag = checkSize();

  return (
    <Tag style={{color: color}}>{children}</Tag>
  );
}
export default Header;

import styles from './button.module.css';

type buttonProps = {
  color?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({color, children, onClick}: buttonProps) => {
  return (
    <button className={styles['button']} style={{backgroundColor: color}} onClick={onClick}>
      {children}
    </button>
  );
}
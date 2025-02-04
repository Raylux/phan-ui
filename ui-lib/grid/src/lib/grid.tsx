import styles from './grid.module.css';

//TODO implement the possibility to insert gap as prop (mutually exclusive with columnGap and rowGap)
type GridProps = {
  columns: number;
  justifyItems?: "start" | "center" | "end" | "stretch"; 
  alignItems?: "start" | "center" | "end" | "stretch"; 
  columnGap?: number;
  rowGap?: number;
  children?: React.ReactNode;
}

export const Grid = ({columns, justifyItems = "start", alignItems = "start", columnGap = 12, rowGap = 12, children}: GridProps) => {
  return (
    <div className={styles['grid']} 
    style={
      {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        justifyItems: justifyItems,
        alignItems: alignItems,
        columnGap: `${columnGap}px`,
        rowGap: `${rowGap}px`,
      }
    }>
      {children}
    </div>
  );
}

export default Grid;

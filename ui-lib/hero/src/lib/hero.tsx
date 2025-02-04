import styles from './hero.module.css';

type HeroProps = {
  title?: string;
  subtitle?: string;
  textAlign?: "start" | "center" | "end";
  backgroundImg?: string;
}

export const Hero = ({ title, subtitle, textAlign = "start", backgroundImg }: HeroProps) => {
  return (
    <div className={styles['hero']}
      style={
        {
          textAlign: textAlign,
        }
      }>
      <div className={styles['hero-textbox']}>
        <h1 className={styles['hero-title']}>{title}</h1>
        <p className={styles['hero-subtitle']}>{subtitle}</p>
      </div>
    </div>
  );
}

export default Hero;

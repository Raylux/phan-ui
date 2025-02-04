import React from 'react';
import githubLogo from '../attachments/github.svg';
import instagramLogo from '../attachments/insta_logo.svg';
import youtubeLogo from '../attachments/youtube_logo.svg';
import styles from './footer.module.css';

type FooterProps = {
  copyrightName?: string;
  email?: string;
  githubLink?: string;
  instagramLink?: string;
  youtubeLink?: string;
}

export const Footer = (
  { copyrightName = "Alessandro Phan",
    email = "alessandro.phan.12@gmail.com",
    githubLink = "https://github.com/Raylux",
    instagramLink = "https://www.instagram.com/ale_phan_/",
    youtubeLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  }: FooterProps) => {
  return (
    <div className={styles['footer']}>
      <div className={styles['social']}>
        <a href={githubLink}>
          <img src={githubLogo} alt="github logo" width={40} height={40}/>
        </a>

        <a href={youtubeLink}>
          <img src={youtubeLogo} alt="youtube logo" width={40} height={40}/>
        </a>

        <a href={instagramLink}>
          <img src={instagramLogo} alt="instagram logo" width={40} height={40}/>
        </a>
      </div>
      <p>Email: {email}</p>
      <p>© 2025 Copyright: {copyrightName}</p>
    </div>

  );
}

export default Footer;

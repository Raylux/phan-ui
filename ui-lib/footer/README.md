# Footer
A simple footer to add your social links

## Setup

Run the following command to add the `footer` component to your project

```sh
npm install @phan-ui/footer
```

## Usage

To use the `footer` component, import it from the `@phan-ui/footer` package.

```jsx
import { Footer } from '@phan-ui/footer';

<Footer/>
```

## Properties

### Links

You can set your personal links for Youtube, Instagram and GitHub profiles
Use:
`githubLink` for github
`instagramLink` for instagram
`youtubeLink` for youtube

```jsx
<Footer
    githubLink="https://github.com/your-profile" 
    instagramLink="https://www.instagram.com/your-profile" 
    youtubeLink="https://www.youtube.com/your-channel" 
/>
```

### Email

Add also your email contact with `email` property

```jsx
<Footer email="example@email.com"/>
```

### Copyright 

Add your name with the property `copyrightName` to the copyright mark

```jsx
<Footer copyrightName="Mario Rossi"/>
```



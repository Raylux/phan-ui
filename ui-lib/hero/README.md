# Hero
A simple hero section

## Setup

Run the following command to add the `hero` component to your project

```sh
npm install @phan-ui/hero
```

## Usage

To use the `hero` component, import it from the `@phan-ui/hero` package.

```jsx
import { Hero } from '@phan-ui/hero';

<Hero/>
```

## Properties

### Title

Set your slogan with the `title` property

```jsx
<Hero title="I'm a hero!"/>
```

### Subtitle

You can also add a simple subtitle or text with `subtitle` property

```jsx
<Hero title="I'm a hero!" subtitle="I have superpowers!"/>
```

### TextAlign 

Use `textAlign` to set the alignment of the title and subtitle
Options:
- start
- center
- end

```jsx
<Hero title="I'm a centered title!" textAlign="center"/>
```





# Header
Used to trigger an action or an event

## Setup

Run the following command to add the `Header` component to your project

```sh
npx phan add @phan-ui/header
```
<!-- This is NOT true -->

## Usage
```jsx
import { Header } from '@phan-ui/header'

<Header size="2xl">I'm a H1 header!</Header>
```

## Properties
### Size
Set the header dimension with the `size` property
```jsx
<Header size="md">I'm a medium size header</Header>
```
You can pick from:
- "xs"
- "sm"
- "md"
- "lg"
- "xl"
- "2xl"

### Color
Set the font color of the Header with the `color` property

```jsx
<Header size="md" color="blue">I'm a blue header</Header>
```



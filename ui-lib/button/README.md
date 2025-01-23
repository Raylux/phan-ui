# Button
Used to trigger an action or an event

## Setup

Run the following command to add the `button` component to your project

```sh
npx phan add @phan-ui/button
```
<!-- This is NOT true -->

## Usage
```jsx
import { Button } from '@phan-ui/button'
```
```jsx
<Button>Click me!</Button>
```

## Properties
### Color
Set the background color of the Button with the `color` property

```jsx
<Button color="red">I'm red</Button>
```

### Events
Use the property `onClick` to pass a function to be triggered when the Button is clicked
```jsx
<Button onClick={() => alert("Hello World!")}>Click me!</Button>
```



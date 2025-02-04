# grid
A simple grid component to organize your content

## Setup

Run the following command to add the `grid` component to your project

```sh
npm install @phan-ui/grid
```

## Usage

To use the `Grid` component, import it from the `@phan-ui/grid` package.

```jsx
import { Grid } from '@phan-ui/grid';

<Grid>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</Grid>
```

## Properties

### Columns

Set the number of columns in the grid using the `columns` property.

```jsx
<Grid columns={3}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</Grid>
```

### Column Gap

Set the gap between columns using the `ColumnGap` property (in px).

```jsx
<Grid ColumnGap={20}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</Grid>
```

### Row Gap

Set the gap between rows using the `rowGap` property (in px).

```jsx
<Grid rowGap={30}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</Grid>
```

### Alignment

Align items within the grid using the `alignItems` property.

```jsx
<Grid alignItems="center">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</Grid>
```

Options are:
- start
- end
- center
- stretch

### Justify Content

Justify the content within the grid using the `justifyContent` property.

```jsx
<Grid justifyContent="space-between">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</Grid>
```

Options are:
- start
- end
- center
- stretch

### Example

Here is a complete example showcasing the `Grid` component with various properties.

```jsx
import { Grid } from '@phan-ui/grid';

<Grid columns={4} gap={20} rowHeight={50} alignItems="center" justifyContent="end">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</Grid>
```



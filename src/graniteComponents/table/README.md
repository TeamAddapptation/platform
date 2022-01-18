# Granite Table / Scorecard

The current state of this micro is used for rendering the scorecard and table front-end.

## Option Attributes

### datatables - `Boolean`

Activated the 3rd party plugin datatables.js

### paging - `Boolean`

Turn on pagination

### page_length - `Integer`

How may rows (records) to display on a single page

## Record Attributes

### value - `String or Integer`

The value to be displayed in the cell. This can also be used for calculating a different output based on predefined parameters.

### href - `URL`

Body cells will wrap the `value` with the provided URL.

### color_label - `HEX` or `RGB/RGBA`

Header cells with a defined color label will display a 2px bottom border with the provided color.
Body cells with a defined color label will display a 2px left border with the provided color.

### text_align - `String` (left, center, right)

Value alignment inside the table cell. Default value is `left`.

### strength - `Boolean`

Function call that returns the `value` wrapped in a div with a dynamic class name based on the `value`.

```javascript
function strength(newCell, cell) {
  if (cell.value <= 50) {
    newCell.innerHTML = `<span class="g__weak">${cell.value}</span>`;
    return newCell;
  } else if (cell.value > 50 && cell.value < 75) {
    newCell.innerHTML = `<span class="g__moderate">${cell.value}</span>`;
    return newCell;
  } else {
    newCell.innerHTML = `<span class="g__strong">${cell.value}</span>`;
    return newCell;
  }
}
```

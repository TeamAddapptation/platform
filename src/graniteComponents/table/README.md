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

'td' cells will wrap the `value` with the provided URL.

### color_label - `HEX` or `RGB/RGBA`

`th` cells with a defined color label will display a 2px bottom border with the provided color.
`td` cells with a defined color label will display a 2px left border with the provided color.

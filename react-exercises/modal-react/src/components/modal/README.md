# Modal

#### API

| Name              | Type                                                | Default             | Description                                                                  |
| ----------------- | --------------------------------------------------- | ------------------- | ---------------------------------------------------------------------------- |
| size              | <code>'xs' \| 'sm' \| 'md' \| 'lg' \| 'xlg' </code> | <code> 'sm' </code> | Size of modal                                                                |
| onClose           | function                                            |                     | A callback fired when modal is closed                                        |
| Children Elements | <code> Header \| Body \| Footer </code>             |                     | Modal can be customized by using these elements, and inserting them to Modal |

---

## Header

    Header will render at top of modal, along with a cross icon which if triggered will close modal

#### API

| Name              | Type         | Default | Description                                 |
| ----------------- | ------------ | ------- | ------------------------------------------- |
| Children Elements | <i> any </i> |         | Will be rendered in Header section of Modal |

## Body

    Body is meant to contain show as much data user wants to see.
    It will scroll if modal reaches max-height possible in window

#### API

| Name              | Type         | Default | Description                               |
| ----------------- | ------------ | ------- | ----------------------------------------- |
| Children Elements | <i> any </i> |         | Will be rendered in Body section of Modal |

## Footer

    Footer will be rendered in bottom of modal

#### API

| Name              | Type         | Default | Description                               |
| ----------------- | ------------ | ------- | ----------------------------------------- |
| Children Elements | <i> any </i> |         | Will be rendered in Body section of Modal |

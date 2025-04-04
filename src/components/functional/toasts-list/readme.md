# transaction-toast-list

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description | Type                  | Default     |
| ------------------- | --------- | ----------- | --------------------- | ----------- |
| `customToasts`      | --        |             | `CustomToastType[]`   | `undefined` |
| `transactionToasts` | --        |             | `ITransactionToast[]` | `undefined` |


## Methods

### `getEventBus() => Promise<IEventBus>`



#### Returns

Type: `Promise<IEventBus>`




## Dependencies

### Depends on

- [generic-toast](./components/custom-toast)
- [transaction-toast](./components/transaction-toast)

### Graph
```mermaid
graph TD;
  toast-list --> generic-toast
  toast-list --> transaction-toast
  generic-toast --> custom-toast
  generic-toast --> simple-toast
  transaction-toast --> transaction-toast-progress
  transaction-toast --> transaction-toast-content
  transaction-toast-content --> fa-icon
  transaction-toast-content --> trim-text
  transaction-toast-content --> explorer-link
  transaction-toast-content --> transaction-toast-details
  explorer-link --> fa-icon
  transaction-toast-details --> fa-icon
  transaction-toast-details --> transaction-toast-details-body
  transaction-toast-details-body --> trim-text
  transaction-toast-details-body --> explorer-link
  transaction-toast-details-body --> copy-button
  copy-button --> fa-icon
  style toast-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

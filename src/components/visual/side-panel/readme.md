# side-panel



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type                                                | Default                   |
| ---------------- | ------------------ | ----------- | --------------------------------------------------- | ------------------------- |
| `isOpen`         | `is-open`          |             | `boolean`                                           | `false`                   |
| `panelClassName` | `panel-class-name` |             | `string`                                            | `undefined`               |
| `side`           | `side`             |             | `SidePanelSideEnum.LEFT \| SidePanelSideEnum.RIGHT` | `SidePanelSideEnum.RIGHT` |


## Events

| Event   | Description | Type               |
| ------- | ----------- | ------------------ |
| `close` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ledger-connect-panel](../../functional/ledger-connect-components)
 - [notifications-feed](../../functional/notifications-feed)
 - [pending-transactions-panel](../../functional/pending-transactions-panel)
 - [sign-transactions-panel](../../functional/sign-transactions-panel)
 - [unlock-panel](../unlock-panel)
 - [wallet-connect-panel](../../functional/wallet-connect-components)

### Graph
```mermaid
graph TD;
  ledger-connect-panel --> side-panel
  notifications-feed --> side-panel
  pending-transactions-panel --> side-panel
  sign-transactions-panel --> side-panel
  unlock-panel --> side-panel
  wallet-connect-panel --> side-panel
  style side-panel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

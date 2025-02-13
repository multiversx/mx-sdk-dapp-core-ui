/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CustomToastType, IComponentToast, ISimpleToast } from './components/controlled/toasts-list/components/transaction-toast/transaction-toast.type';
import { LocalJSX as JSX, VNode } from '@stencil/core';
import { ILedgerConnectModalData } from './components/controlled/ledger-connect-modal/ledger-connect-modal.types';
import { IEventBus } from './utils/EventBus';
import { IPendingTransactionsModalData } from './components/controlled/pending-transactions-modal/pending-transactions-modal.types';
import { ISignTransactionsModalData } from './components/controlled/sign-transactions-modal/sign-transactions-modal.types';
import {
  CustomToastType as CustomToastType1,
  IToastDataState,
  ITransaction,
  ITransactionProgressState,
  ITransactionToast,
} from './components/controlled/toasts-list/components/transaction-toast/transaction-toast.type';
import { ITransactionAccount, ITransactionIconInfo, ITransactionsTableRow } from './components/controlled/transactions-table/transactions-table.type';
import { ITransactionValue } from './components/controlled/transactions-table/transactions-table.type';
import { IWalletConnectModalData } from './components/controlled/wallet-connect-modal/wallet-connect-modal.types';
export { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export { CustomToastType, IComponentToast, ISimpleToast } from './components/controlled/toasts-list/components/transaction-toast/transaction-toast.type';
export { LocalJSX as JSX, VNode } from '@stencil/core';
export { ILedgerConnectModalData } from './components/controlled/ledger-connect-modal/ledger-connect-modal.types';
export { IEventBus } from './utils/EventBus';
export { IPendingTransactionsModalData } from './components/controlled/pending-transactions-modal/pending-transactions-modal.types';
export { ISignTransactionsModalData } from './components/controlled/sign-transactions-modal/sign-transactions-modal.types';
export {
  CustomToastType as CustomToastType1,
  IToastDataState,
  ITransaction,
  ITransactionProgressState,
  ITransactionToast,
} from './components/controlled/toasts-list/components/transaction-toast/transaction-toast.type';
export { ITransactionAccount, ITransactionIconInfo, ITransactionsTableRow } from './components/controlled/transactions-table/transactions-table.type';
export { ITransactionValue } from './components/controlled/transactions-table/transactions-table.type';
export { IWalletConnectModalData } from './components/controlled/wallet-connect-modal/wallet-connect-modal.types';
export namespace Components {
  interface BalanceComponent {
    amount: string;
    header?: string;
    ticker: string;
    usdValue?: string;
  }
  interface CopyButton {
    class?: string;
    copyIcon: IconDefinition;
    successIcon: IconDefinition;
    text: string;
  }
  interface CustomToast {
    toast: IComponentToast;
  }
  interface ExplorerLink {
    class: string;
    dataTestId?: string;
    icon?: IconDefinition;
    link: string;
    text?: string;
  }
  interface FaIcon {
    class?: string;
    description?: string;
    icon: IconDefinition;
  }
  interface FormatAmount {
    class?: string;
    dataTestId?: string;
    isValid: boolean;
    label?: string;
    labelClass?: string;
    valueDecimal: string;
    valueInteger: string;
  }
  interface FungibleComponent {}
  interface GenericModal {
    body: VNode;
    modalSubtitle?: string | VNode;
    modalTitle: string | VNode;
  }
  interface GenericSpinner {}
  interface GenericToast {
    toast: CustomToastType;
  }
  interface LedgerConnectModal {
    data: ILedgerConnectModalData;
    getEventBus: () => Promise<IEventBus>;
  }
  interface PendingTransactionsModal {
    data: IPendingTransactionsModalData;
    getEventBus: () => Promise<IEventBus>;
  }
  interface SignTransactionComponent {
    header: VNode;
  }
  interface SignTransactionsModal {
    data: ISignTransactionsModalData;
    getEventBus: () => Promise<IEventBus>;
  }
  interface SimpleToast {
    toast: ISimpleToast;
  }
  interface ToastList {
    customToasts: CustomToastType1[];
    getEventBus: () => Promise<IEventBus>;
    transactionToasts: ITransactionToast[];
  }
  interface TokenComponent {}
  interface TransactionAccount {
    account: ITransactionAccount;
    class?: string;
    dataTestId?: string;
    scope: 'receiver' | 'sender';
    showLockedAccounts: boolean;
  }
  interface TransactionAccountName {
    address: string;
    class?: string;
    dataTestId?: string;
    description: string;
    name?: string;
  }
  interface TransactionAge {
    age: string;
    class?: string;
    tooltip?: string;
  }
  interface TransactionDirectionBadge {
    class?: string;
    direction: string;
  }
  interface TransactionHash {
    class?: string;
    transaction: ITransactionsTableRow;
  }
  interface TransactionIcon {
    class?: string;
    iconInfo: ITransactionIconInfo;
  }
  interface TransactionMethod {
    actionDescription: string;
    class?: string;
    method: string;
  }
  interface TransactionShards {
    class?: string;
    transaction: ITransactionsTableRow;
  }
  interface TransactionToast {
    processedTransactionsStatus: string | JSX.Element;
    toastDataState: IToastDataState;
    toastId: string;
    transactionProgressState?: ITransactionProgressState;
    transactions: ITransaction[];
    wrapperClass: string;
  }
  interface TransactionToastContent {
    processedTransactionsStatus?: string | JSX.Element;
    toastDataState: IToastDataState;
    transactions: ITransaction[];
  }
  interface TransactionToastDetails {
    processedTransactionsStatus?: JSX.Element | string;
    transactionClass: string;
    transactions?: ITransaction[];
  }
  interface TransactionToastDetailsBody {
    hash: string;
    link: string;
    status?: string;
    transactionClass?: string;
  }
  interface TransactionToastProgress {
    endTime?: number;
    startTime?: number;
  }
  interface TransactionToastWrapper {
    wrapperClass: string;
    wrapperId?: string;
  }
  interface TransactionValue {
    class?: string;
    value: ITransactionValue;
  }
  interface TransactionsTable {
    class?: string;
    transactions: ITransactionsTableRow[];
  }
  interface TrimText {
    class?: string;
    dataTestId: string;
    text: string;
  }
  interface WalletConnectModal {
    data: IWalletConnectModalData;
    getEventBus: () => Promise<IEventBus>;
  }
}
export interface CustomToastCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLCustomToastElement;
}
export interface GenericModalCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLGenericModalElement;
}
export interface GenericToastCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLGenericToastElement;
}
export interface SimpleToastCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLSimpleToastElement;
}
export interface TransactionToastCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLTransactionToastElement;
}
export interface TransactionToastContentCustomEvent<T> extends CustomEvent<T> {
  detail: T;
  target: HTMLTransactionToastContentElement;
}
declare global {
  interface HTMLBalanceComponentElement extends Components.BalanceComponent, HTMLStencilElement {}
  var HTMLBalanceComponentElement: {
    prototype: HTMLBalanceComponentElement;
    new (): HTMLBalanceComponentElement;
  };
  interface HTMLCopyButtonElement extends Components.CopyButton, HTMLStencilElement {}
  var HTMLCopyButtonElement: {
    prototype: HTMLCopyButtonElement;
    new (): HTMLCopyButtonElement;
  };
  interface HTMLCustomToastElementEventMap {
    handleDeleteToast: string;
  }
  interface HTMLCustomToastElement extends Components.CustomToast, HTMLStencilElement {
    addEventListener<K extends keyof HTMLCustomToastElementEventMap>(
      type: K,
      listener: (this: HTMLCustomToastElement, ev: CustomToastCustomEvent<HTMLCustomToastElementEventMap[K]>) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLCustomToastElementEventMap>(
      type: K,
      listener: (this: HTMLCustomToastElement, ev: CustomToastCustomEvent<HTMLCustomToastElementEventMap[K]>) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
  }
  var HTMLCustomToastElement: {
    prototype: HTMLCustomToastElement;
    new (): HTMLCustomToastElement;
  };
  interface HTMLExplorerLinkElement extends Components.ExplorerLink, HTMLStencilElement {}
  var HTMLExplorerLinkElement: {
    prototype: HTMLExplorerLinkElement;
    new (): HTMLExplorerLinkElement;
  };
  interface HTMLFaIconElement extends Components.FaIcon, HTMLStencilElement {}
  var HTMLFaIconElement: {
    prototype: HTMLFaIconElement;
    new (): HTMLFaIconElement;
  };
  interface HTMLFormatAmountElement extends Components.FormatAmount, HTMLStencilElement {}
  var HTMLFormatAmountElement: {
    prototype: HTMLFormatAmountElement;
    new (): HTMLFormatAmountElement;
  };
  interface HTMLFungibleComponentElement extends Components.FungibleComponent, HTMLStencilElement {}
  var HTMLFungibleComponentElement: {
    prototype: HTMLFungibleComponentElement;
    new (): HTMLFungibleComponentElement;
  };
  interface HTMLGenericModalElementEventMap {
    close: void;
  }
  interface HTMLGenericModalElement extends Components.GenericModal, HTMLStencilElement {
    addEventListener<K extends keyof HTMLGenericModalElementEventMap>(
      type: K,
      listener: (this: HTMLGenericModalElement, ev: GenericModalCustomEvent<HTMLGenericModalElementEventMap[K]>) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLGenericModalElementEventMap>(
      type: K,
      listener: (this: HTMLGenericModalElement, ev: GenericModalCustomEvent<HTMLGenericModalElementEventMap[K]>) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
  }
  var HTMLGenericModalElement: {
    prototype: HTMLGenericModalElement;
    new (): HTMLGenericModalElement;
  };
  interface HTMLGenericSpinnerElement extends Components.GenericSpinner, HTMLStencilElement {}
  var HTMLGenericSpinnerElement: {
    prototype: HTMLGenericSpinnerElement;
    new (): HTMLGenericSpinnerElement;
  };
  interface HTMLGenericToastElementEventMap {
    handleDeleteToast: string;
  }
  interface HTMLGenericToastElement extends Components.GenericToast, HTMLStencilElement {
    addEventListener<K extends keyof HTMLGenericToastElementEventMap>(
      type: K,
      listener: (this: HTMLGenericToastElement, ev: GenericToastCustomEvent<HTMLGenericToastElementEventMap[K]>) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLGenericToastElementEventMap>(
      type: K,
      listener: (this: HTMLGenericToastElement, ev: GenericToastCustomEvent<HTMLGenericToastElementEventMap[K]>) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
  }
  var HTMLGenericToastElement: {
    prototype: HTMLGenericToastElement;
    new (): HTMLGenericToastElement;
  };
  interface HTMLLedgerConnectModalElement extends Components.LedgerConnectModal, HTMLStencilElement {}
  var HTMLLedgerConnectModalElement: {
    prototype: HTMLLedgerConnectModalElement;
    new (): HTMLLedgerConnectModalElement;
  };
  interface HTMLPendingTransactionsModalElement extends Components.PendingTransactionsModal, HTMLStencilElement {}
  var HTMLPendingTransactionsModalElement: {
    prototype: HTMLPendingTransactionsModalElement;
    new (): HTMLPendingTransactionsModalElement;
  };
  interface HTMLSignTransactionComponentElement extends Components.SignTransactionComponent, HTMLStencilElement {}
  var HTMLSignTransactionComponentElement: {
    prototype: HTMLSignTransactionComponentElement;
    new (): HTMLSignTransactionComponentElement;
  };
  interface HTMLSignTransactionsModalElement extends Components.SignTransactionsModal, HTMLStencilElement {}
  var HTMLSignTransactionsModalElement: {
    prototype: HTMLSignTransactionsModalElement;
    new (): HTMLSignTransactionsModalElement;
  };
  interface HTMLSimpleToastElementEventMap {
    handleDeleteToast: void;
  }
  interface HTMLSimpleToastElement extends Components.SimpleToast, HTMLStencilElement {
    addEventListener<K extends keyof HTMLSimpleToastElementEventMap>(
      type: K,
      listener: (this: HTMLSimpleToastElement, ev: SimpleToastCustomEvent<HTMLSimpleToastElementEventMap[K]>) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLSimpleToastElementEventMap>(
      type: K,
      listener: (this: HTMLSimpleToastElement, ev: SimpleToastCustomEvent<HTMLSimpleToastElementEventMap[K]>) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
  }
  var HTMLSimpleToastElement: {
    prototype: HTMLSimpleToastElement;
    new (): HTMLSimpleToastElement;
  };
  interface HTMLToastListElement extends Components.ToastList, HTMLStencilElement {}
  var HTMLToastListElement: {
    prototype: HTMLToastListElement;
    new (): HTMLToastListElement;
  };
  interface HTMLTokenComponentElement extends Components.TokenComponent, HTMLStencilElement {}
  var HTMLTokenComponentElement: {
    prototype: HTMLTokenComponentElement;
    new (): HTMLTokenComponentElement;
  };
  interface HTMLTransactionAccountElement extends Components.TransactionAccount, HTMLStencilElement {}
  var HTMLTransactionAccountElement: {
    prototype: HTMLTransactionAccountElement;
    new (): HTMLTransactionAccountElement;
  };
  interface HTMLTransactionAccountNameElement extends Components.TransactionAccountName, HTMLStencilElement {}
  var HTMLTransactionAccountNameElement: {
    prototype: HTMLTransactionAccountNameElement;
    new (): HTMLTransactionAccountNameElement;
  };
  interface HTMLTransactionAgeElement extends Components.TransactionAge, HTMLStencilElement {}
  var HTMLTransactionAgeElement: {
    prototype: HTMLTransactionAgeElement;
    new (): HTMLTransactionAgeElement;
  };
  interface HTMLTransactionDirectionBadgeElement extends Components.TransactionDirectionBadge, HTMLStencilElement {}
  var HTMLTransactionDirectionBadgeElement: {
    prototype: HTMLTransactionDirectionBadgeElement;
    new (): HTMLTransactionDirectionBadgeElement;
  };
  interface HTMLTransactionHashElement extends Components.TransactionHash, HTMLStencilElement {}
  var HTMLTransactionHashElement: {
    prototype: HTMLTransactionHashElement;
    new (): HTMLTransactionHashElement;
  };
  interface HTMLTransactionIconElement extends Components.TransactionIcon, HTMLStencilElement {}
  var HTMLTransactionIconElement: {
    prototype: HTMLTransactionIconElement;
    new (): HTMLTransactionIconElement;
  };
  interface HTMLTransactionMethodElement extends Components.TransactionMethod, HTMLStencilElement {}
  var HTMLTransactionMethodElement: {
    prototype: HTMLTransactionMethodElement;
    new (): HTMLTransactionMethodElement;
  };
  interface HTMLTransactionShardsElement extends Components.TransactionShards, HTMLStencilElement {}
  var HTMLTransactionShardsElement: {
    prototype: HTMLTransactionShardsElement;
    new (): HTMLTransactionShardsElement;
  };
  interface HTMLTransactionToastElementEventMap {
    handleDeleteToast: string;
  }
  interface HTMLTransactionToastElement extends Components.TransactionToast, HTMLStencilElement {
    addEventListener<K extends keyof HTMLTransactionToastElementEventMap>(
      type: K,
      listener: (this: HTMLTransactionToastElement, ev: TransactionToastCustomEvent<HTMLTransactionToastElementEventMap[K]>) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLTransactionToastElementEventMap>(
      type: K,
      listener: (this: HTMLTransactionToastElement, ev: TransactionToastCustomEvent<HTMLTransactionToastElementEventMap[K]>) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
  }
  var HTMLTransactionToastElement: {
    prototype: HTMLTransactionToastElement;
    new (): HTMLTransactionToastElement;
  };
  interface HTMLTransactionToastContentElementEventMap {
    deleteToast: void;
  }
  interface HTMLTransactionToastContentElement extends Components.TransactionToastContent, HTMLStencilElement {
    addEventListener<K extends keyof HTMLTransactionToastContentElementEventMap>(
      type: K,
      listener: (this: HTMLTransactionToastContentElement, ev: TransactionToastContentCustomEvent<HTMLTransactionToastContentElementEventMap[K]>) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLTransactionToastContentElementEventMap>(
      type: K,
      listener: (this: HTMLTransactionToastContentElement, ev: TransactionToastContentCustomEvent<HTMLTransactionToastContentElementEventMap[K]>) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(
      type: K,
      listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
  }
  var HTMLTransactionToastContentElement: {
    prototype: HTMLTransactionToastContentElement;
    new (): HTMLTransactionToastContentElement;
  };
  interface HTMLTransactionToastDetailsElement extends Components.TransactionToastDetails, HTMLStencilElement {}
  var HTMLTransactionToastDetailsElement: {
    prototype: HTMLTransactionToastDetailsElement;
    new (): HTMLTransactionToastDetailsElement;
  };
  interface HTMLTransactionToastDetailsBodyElement extends Components.TransactionToastDetailsBody, HTMLStencilElement {}
  var HTMLTransactionToastDetailsBodyElement: {
    prototype: HTMLTransactionToastDetailsBodyElement;
    new (): HTMLTransactionToastDetailsBodyElement;
  };
  interface HTMLTransactionToastProgressElement extends Components.TransactionToastProgress, HTMLStencilElement {}
  var HTMLTransactionToastProgressElement: {
    prototype: HTMLTransactionToastProgressElement;
    new (): HTMLTransactionToastProgressElement;
  };
  interface HTMLTransactionToastWrapperElement extends Components.TransactionToastWrapper, HTMLStencilElement {}
  var HTMLTransactionToastWrapperElement: {
    prototype: HTMLTransactionToastWrapperElement;
    new (): HTMLTransactionToastWrapperElement;
  };
  interface HTMLTransactionValueElement extends Components.TransactionValue, HTMLStencilElement {}
  var HTMLTransactionValueElement: {
    prototype: HTMLTransactionValueElement;
    new (): HTMLTransactionValueElement;
  };
  interface HTMLTransactionsTableElement extends Components.TransactionsTable, HTMLStencilElement {}
  var HTMLTransactionsTableElement: {
    prototype: HTMLTransactionsTableElement;
    new (): HTMLTransactionsTableElement;
  };
  interface HTMLTrimTextElement extends Components.TrimText, HTMLStencilElement {}
  var HTMLTrimTextElement: {
    prototype: HTMLTrimTextElement;
    new (): HTMLTrimTextElement;
  };
  interface HTMLWalletConnectModalElement extends Components.WalletConnectModal, HTMLStencilElement {}
  var HTMLWalletConnectModalElement: {
    prototype: HTMLWalletConnectModalElement;
    new (): HTMLWalletConnectModalElement;
  };
  interface HTMLElementTagNameMap {
    'balance-component': HTMLBalanceComponentElement;
    'copy-button': HTMLCopyButtonElement;
    'custom-toast': HTMLCustomToastElement;
    'explorer-link': HTMLExplorerLinkElement;
    'fa-icon': HTMLFaIconElement;
    'format-amount': HTMLFormatAmountElement;
    'fungible-component': HTMLFungibleComponentElement;
    'generic-modal': HTMLGenericModalElement;
    'generic-spinner': HTMLGenericSpinnerElement;
    'generic-toast': HTMLGenericToastElement;
    'ledger-connect-modal': HTMLLedgerConnectModalElement;
    'pending-transactions-modal': HTMLPendingTransactionsModalElement;
    'sign-transaction-component': HTMLSignTransactionComponentElement;
    'sign-transactions-modal': HTMLSignTransactionsModalElement;
    'simple-toast': HTMLSimpleToastElement;
    'toast-list': HTMLToastListElement;
    'token-component': HTMLTokenComponentElement;
    'transaction-account': HTMLTransactionAccountElement;
    'transaction-account-name': HTMLTransactionAccountNameElement;
    'transaction-age': HTMLTransactionAgeElement;
    'transaction-direction-badge': HTMLTransactionDirectionBadgeElement;
    'transaction-hash': HTMLTransactionHashElement;
    'transaction-icon': HTMLTransactionIconElement;
    'transaction-method': HTMLTransactionMethodElement;
    'transaction-shards': HTMLTransactionShardsElement;
    'transaction-toast': HTMLTransactionToastElement;
    'transaction-toast-content': HTMLTransactionToastContentElement;
    'transaction-toast-details': HTMLTransactionToastDetailsElement;
    'transaction-toast-details-body': HTMLTransactionToastDetailsBodyElement;
    'transaction-toast-progress': HTMLTransactionToastProgressElement;
    'transaction-toast-wrapper': HTMLTransactionToastWrapperElement;
    'transaction-value': HTMLTransactionValueElement;
    'transactions-table': HTMLTransactionsTableElement;
    'trim-text': HTMLTrimTextElement;
    'wallet-connect-modal': HTMLWalletConnectModalElement;
  }
}
declare namespace LocalJSX {
  interface BalanceComponent {
    amount?: string;
    header?: string;
    ticker?: string;
    usdValue?: string;
  }
  interface CopyButton {
    class?: string;
    copyIcon?: IconDefinition;
    successIcon?: IconDefinition;
    text?: string;
  }
  interface CustomToast {
    onHandleDeleteToast?: (event: CustomToastCustomEvent<string>) => void;
    toast?: IComponentToast;
  }
  interface ExplorerLink {
    class?: string;
    dataTestId?: string;
    icon?: IconDefinition;
    link?: string;
    text?: string;
  }
  interface FaIcon {
    class?: string;
    description?: string;
    icon?: IconDefinition;
  }
  interface FormatAmount {
    class?: string;
    dataTestId?: string;
    isValid?: boolean;
    label?: string;
    labelClass?: string;
    valueDecimal?: string;
    valueInteger?: string;
  }
  interface FungibleComponent {}
  interface GenericModal {
    body?: VNode;
    modalSubtitle?: string | VNode;
    modalTitle?: string | VNode;
    onClose?: (event: GenericModalCustomEvent<void>) => void;
  }
  interface GenericSpinner {}
  interface GenericToast {
    onHandleDeleteToast?: (event: GenericToastCustomEvent<string>) => void;
    toast?: CustomToastType;
  }
  interface LedgerConnectModal {
    data?: ILedgerConnectModalData;
  }
  interface PendingTransactionsModal {
    data?: IPendingTransactionsModalData;
  }
  interface SignTransactionComponent {
    header?: VNode;
  }
  interface SignTransactionsModal {
    data?: ISignTransactionsModalData;
  }
  interface SimpleToast {
    onHandleDeleteToast?: (event: SimpleToastCustomEvent<void>) => void;
    toast?: ISimpleToast;
  }
  interface ToastList {
    customToasts?: CustomToastType1[];
    transactionToasts?: ITransactionToast[];
  }
  interface TokenComponent {}
  interface TransactionAccount {
    account?: ITransactionAccount;
    class?: string;
    dataTestId?: string;
    scope?: 'receiver' | 'sender';
    showLockedAccounts?: boolean;
  }
  interface TransactionAccountName {
    address?: string;
    class?: string;
    dataTestId?: string;
    description?: string;
    name?: string;
  }
  interface TransactionAge {
    age?: string;
    class?: string;
    tooltip?: string;
  }
  interface TransactionDirectionBadge {
    class?: string;
    direction?: string;
  }
  interface TransactionHash {
    class?: string;
    transaction?: ITransactionsTableRow;
  }
  interface TransactionIcon {
    class?: string;
    iconInfo?: ITransactionIconInfo;
  }
  interface TransactionMethod {
    actionDescription?: string;
    class?: string;
    method?: string;
  }
  interface TransactionShards {
    class?: string;
    transaction?: ITransactionsTableRow;
  }
  interface TransactionToast {
    onHandleDeleteToast?: (event: TransactionToastCustomEvent<string>) => void;
    processedTransactionsStatus?: string | JSX.Element;
    toastDataState?: IToastDataState;
    toastId?: string;
    transactionProgressState?: ITransactionProgressState;
    transactions?: ITransaction[];
    wrapperClass?: string;
  }
  interface TransactionToastContent {
    onDeleteToast?: (event: TransactionToastContentCustomEvent<void>) => void;
    processedTransactionsStatus?: string | JSX.Element;
    toastDataState?: IToastDataState;
    transactions?: ITransaction[];
  }
  interface TransactionToastDetails {
    processedTransactionsStatus?: JSX.Element | string;
    transactionClass?: string;
    transactions?: ITransaction[];
  }
  interface TransactionToastDetailsBody {
    hash?: string;
    link?: string;
    status?: string;
    transactionClass?: string;
  }
  interface TransactionToastProgress {
    endTime?: number;
    startTime?: number;
  }
  interface TransactionToastWrapper {
    wrapperClass?: string;
    wrapperId?: string;
  }
  interface TransactionValue {
    class?: string;
    value?: ITransactionValue;
  }
  interface TransactionsTable {
    class?: string;
    transactions?: ITransactionsTableRow[];
  }
  interface TrimText {
    class?: string;
    dataTestId?: string;
    text?: string;
  }
  interface WalletConnectModal {
    data?: IWalletConnectModalData;
  }
  interface IntrinsicElements {
    'balance-component': BalanceComponent;
    'copy-button': CopyButton;
    'custom-toast': CustomToast;
    'explorer-link': ExplorerLink;
    'fa-icon': FaIcon;
    'format-amount': FormatAmount;
    'fungible-component': FungibleComponent;
    'generic-modal': GenericModal;
    'generic-spinner': GenericSpinner;
    'generic-toast': GenericToast;
    'ledger-connect-modal': LedgerConnectModal;
    'pending-transactions-modal': PendingTransactionsModal;
    'sign-transaction-component': SignTransactionComponent;
    'sign-transactions-modal': SignTransactionsModal;
    'simple-toast': SimpleToast;
    'toast-list': ToastList;
    'token-component': TokenComponent;
    'transaction-account': TransactionAccount;
    'transaction-account-name': TransactionAccountName;
    'transaction-age': TransactionAge;
    'transaction-direction-badge': TransactionDirectionBadge;
    'transaction-hash': TransactionHash;
    'transaction-icon': TransactionIcon;
    'transaction-method': TransactionMethod;
    'transaction-shards': TransactionShards;
    'transaction-toast': TransactionToast;
    'transaction-toast-content': TransactionToastContent;
    'transaction-toast-details': TransactionToastDetails;
    'transaction-toast-details-body': TransactionToastDetailsBody;
    'transaction-toast-progress': TransactionToastProgress;
    'transaction-toast-wrapper': TransactionToastWrapper;
    'transaction-value': TransactionValue;
    'transactions-table': TransactionsTable;
    'trim-text': TrimText;
    'wallet-connect-modal': WalletConnectModal;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'balance-component': LocalJSX.BalanceComponent & JSXBase.HTMLAttributes<HTMLBalanceComponentElement>;
      'copy-button': LocalJSX.CopyButton & JSXBase.HTMLAttributes<HTMLCopyButtonElement>;
      'custom-toast': LocalJSX.CustomToast & JSXBase.HTMLAttributes<HTMLCustomToastElement>;
      'explorer-link': LocalJSX.ExplorerLink & JSXBase.HTMLAttributes<HTMLExplorerLinkElement>;
      'fa-icon': LocalJSX.FaIcon & JSXBase.HTMLAttributes<HTMLFaIconElement>;
      'format-amount': LocalJSX.FormatAmount & JSXBase.HTMLAttributes<HTMLFormatAmountElement>;
      'fungible-component': LocalJSX.FungibleComponent & JSXBase.HTMLAttributes<HTMLFungibleComponentElement>;
      'generic-modal': LocalJSX.GenericModal & JSXBase.HTMLAttributes<HTMLGenericModalElement>;
      'generic-spinner': LocalJSX.GenericSpinner & JSXBase.HTMLAttributes<HTMLGenericSpinnerElement>;
      'generic-toast': LocalJSX.GenericToast & JSXBase.HTMLAttributes<HTMLGenericToastElement>;
      'ledger-connect-modal': LocalJSX.LedgerConnectModal & JSXBase.HTMLAttributes<HTMLLedgerConnectModalElement>;
      'pending-transactions-modal': LocalJSX.PendingTransactionsModal & JSXBase.HTMLAttributes<HTMLPendingTransactionsModalElement>;
      'sign-transaction-component': LocalJSX.SignTransactionComponent & JSXBase.HTMLAttributes<HTMLSignTransactionComponentElement>;
      'sign-transactions-modal': LocalJSX.SignTransactionsModal & JSXBase.HTMLAttributes<HTMLSignTransactionsModalElement>;
      'simple-toast': LocalJSX.SimpleToast & JSXBase.HTMLAttributes<HTMLSimpleToastElement>;
      'toast-list': LocalJSX.ToastList & JSXBase.HTMLAttributes<HTMLToastListElement>;
      'token-component': LocalJSX.TokenComponent & JSXBase.HTMLAttributes<HTMLTokenComponentElement>;
      'transaction-account': LocalJSX.TransactionAccount & JSXBase.HTMLAttributes<HTMLTransactionAccountElement>;
      'transaction-account-name': LocalJSX.TransactionAccountName & JSXBase.HTMLAttributes<HTMLTransactionAccountNameElement>;
      'transaction-age': LocalJSX.TransactionAge & JSXBase.HTMLAttributes<HTMLTransactionAgeElement>;
      'transaction-direction-badge': LocalJSX.TransactionDirectionBadge & JSXBase.HTMLAttributes<HTMLTransactionDirectionBadgeElement>;
      'transaction-hash': LocalJSX.TransactionHash & JSXBase.HTMLAttributes<HTMLTransactionHashElement>;
      'transaction-icon': LocalJSX.TransactionIcon & JSXBase.HTMLAttributes<HTMLTransactionIconElement>;
      'transaction-method': LocalJSX.TransactionMethod & JSXBase.HTMLAttributes<HTMLTransactionMethodElement>;
      'transaction-shards': LocalJSX.TransactionShards & JSXBase.HTMLAttributes<HTMLTransactionShardsElement>;
      'transaction-toast': LocalJSX.TransactionToast & JSXBase.HTMLAttributes<HTMLTransactionToastElement>;
      'transaction-toast-content': LocalJSX.TransactionToastContent & JSXBase.HTMLAttributes<HTMLTransactionToastContentElement>;
      'transaction-toast-details': LocalJSX.TransactionToastDetails & JSXBase.HTMLAttributes<HTMLTransactionToastDetailsElement>;
      'transaction-toast-details-body': LocalJSX.TransactionToastDetailsBody & JSXBase.HTMLAttributes<HTMLTransactionToastDetailsBodyElement>;
      'transaction-toast-progress': LocalJSX.TransactionToastProgress & JSXBase.HTMLAttributes<HTMLTransactionToastProgressElement>;
      'transaction-toast-wrapper': LocalJSX.TransactionToastWrapper & JSXBase.HTMLAttributes<HTMLTransactionToastWrapperElement>;
      'transaction-value': LocalJSX.TransactionValue & JSXBase.HTMLAttributes<HTMLTransactionValueElement>;
      'transactions-table': LocalJSX.TransactionsTable & JSXBase.HTMLAttributes<HTMLTransactionsTableElement>;
      'trim-text': LocalJSX.TrimText & JSXBase.HTMLAttributes<HTMLTrimTextElement>;
      'wallet-connect-modal': LocalJSX.WalletConnectModal & JSXBase.HTMLAttributes<HTMLWalletConnectModalElement>;
    }
  }
}

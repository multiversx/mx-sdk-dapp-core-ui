/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { VNode } from "@stencil/core";
import { ILedgerConnectModalData } from "./components/ledger-connect-modal/ledger-connect-modal.types";
import { IEventBus } from "./utils/EventBus";
import { IPendingTransactionsModalData } from "./components/pending-transactions-modal/pending-transactions-modal.types";
import { ISignTransactionsModalData } from "./components/sign-transactions-modal/sign-transactions-modal.types";
import { IToastDataState, ITransaction, ITransactionProgressState } from "./components/transaction-toast/transaction-toast.type";
import { IWalletConnectModalData } from "./components/wallet-connect-modal/wallet-connect-modal.types";
export { VNode } from "@stencil/core";
export { ILedgerConnectModalData } from "./components/ledger-connect-modal/ledger-connect-modal.types";
export { IEventBus } from "./utils/EventBus";
export { IPendingTransactionsModalData } from "./components/pending-transactions-modal/pending-transactions-modal.types";
export { ISignTransactionsModalData } from "./components/sign-transactions-modal/sign-transactions-modal.types";
export { IToastDataState, ITransaction, ITransactionProgressState } from "./components/transaction-toast/transaction-toast.type";
export { IWalletConnectModalData } from "./components/wallet-connect-modal/wallet-connect-modal.types";
export namespace Components {
    interface FormatAmount {
        "class"?: string;
        "decimals"?: number;
        "digits"?: number;
        "egldLabel"?: string;
        "showLabel"?: boolean;
        "showLastNonZeroDecimal"?: boolean;
        "token"?: string;
        "value": string;
    }
    interface GenericModal {
        "body": VNode;
        "modalSubtitle"?: string | VNode;
        "modalTitle": string | VNode;
        "onClose": () => void;
    }
    interface GenericSpinner {
    }
    interface LedgerConnectModal {
        "data": ILedgerConnectModalData;
        "getEventBus": () => Promise<IEventBus>;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PendingTransactionsModal {
        "data": IPendingTransactionsModalData;
        "getEventBus": () => Promise<IEventBus>;
    }
    interface SignTransactionsModal {
        "data": ISignTransactionsModalData;
        "getEventBus": () => Promise<IEventBus>;
    }
    interface TransactionToast {
        "processedTransactionsStatus": string | JSX.Element;
        "toastDataState": IToastDataState;
        "toastId": string;
        "transactionProgressState"?: ITransactionProgressState;
        "transactions": ITransaction[];
        "wrapperClass": string;
    }
    interface TransactionToastContent {
        "processedTransactionsStatus"?: string | JSX.Element;
        "toastDataState": IToastDataState;
        "transactions": ITransaction[];
    }
    interface TransactionToastDetails {
        "processedTransactionsStatus"?: JSX.Element | string;
        "transactionClass": string;
        "transactions"?: ITransaction[];
    }
    interface TransactionToastDetailsBody {
        "hash": string;
        "status"?: string;
        "transactionClass"?: string;
    }
    interface TransactionToastList {
    }
    interface TransactionToastProgress {
        "currentRemaining"?: number;
        "progressClass": string;
    }
    interface TransactionToastWrapper {
        "wrapperClass": string;
        "wrapperId"?: string;
    }
    interface WalletConnectModal {
        "data": IWalletConnectModalData;
        "getEventBus": () => Promise<IEventBus>;
    }
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
    interface HTMLFormatAmountElement extends Components.FormatAmount, HTMLStencilElement {
    }
    var HTMLFormatAmountElement: {
        prototype: HTMLFormatAmountElement;
        new (): HTMLFormatAmountElement;
    };
    interface HTMLGenericModalElement extends Components.GenericModal, HTMLStencilElement {
    }
    var HTMLGenericModalElement: {
        prototype: HTMLGenericModalElement;
        new (): HTMLGenericModalElement;
    };
    interface HTMLGenericSpinnerElement extends Components.GenericSpinner, HTMLStencilElement {
    }
    var HTMLGenericSpinnerElement: {
        prototype: HTMLGenericSpinnerElement;
        new (): HTMLGenericSpinnerElement;
    };
    interface HTMLLedgerConnectModalElement extends Components.LedgerConnectModal, HTMLStencilElement {
    }
    var HTMLLedgerConnectModalElement: {
        prototype: HTMLLedgerConnectModalElement;
        new (): HTMLLedgerConnectModalElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPendingTransactionsModalElement extends Components.PendingTransactionsModal, HTMLStencilElement {
    }
    var HTMLPendingTransactionsModalElement: {
        prototype: HTMLPendingTransactionsModalElement;
        new (): HTMLPendingTransactionsModalElement;
    };
    interface HTMLSignTransactionsModalElement extends Components.SignTransactionsModal, HTMLStencilElement {
    }
    var HTMLSignTransactionsModalElement: {
        prototype: HTMLSignTransactionsModalElement;
        new (): HTMLSignTransactionsModalElement;
    };
    interface HTMLTransactionToastElementEventMap {
        "handleDeleteToast": string;
    }
    interface HTMLTransactionToastElement extends Components.TransactionToast, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTransactionToastElementEventMap>(type: K, listener: (this: HTMLTransactionToastElement, ev: TransactionToastCustomEvent<HTMLTransactionToastElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTransactionToastElementEventMap>(type: K, listener: (this: HTMLTransactionToastElement, ev: TransactionToastCustomEvent<HTMLTransactionToastElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTransactionToastElement: {
        prototype: HTMLTransactionToastElement;
        new (): HTMLTransactionToastElement;
    };
    interface HTMLTransactionToastContentElementEventMap {
        "deleteToast": void;
    }
    interface HTMLTransactionToastContentElement extends Components.TransactionToastContent, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTransactionToastContentElementEventMap>(type: K, listener: (this: HTMLTransactionToastContentElement, ev: TransactionToastContentCustomEvent<HTMLTransactionToastContentElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTransactionToastContentElementEventMap>(type: K, listener: (this: HTMLTransactionToastContentElement, ev: TransactionToastContentCustomEvent<HTMLTransactionToastContentElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTransactionToastContentElement: {
        prototype: HTMLTransactionToastContentElement;
        new (): HTMLTransactionToastContentElement;
    };
    interface HTMLTransactionToastDetailsElement extends Components.TransactionToastDetails, HTMLStencilElement {
    }
    var HTMLTransactionToastDetailsElement: {
        prototype: HTMLTransactionToastDetailsElement;
        new (): HTMLTransactionToastDetailsElement;
    };
    interface HTMLTransactionToastDetailsBodyElement extends Components.TransactionToastDetailsBody, HTMLStencilElement {
    }
    var HTMLTransactionToastDetailsBodyElement: {
        prototype: HTMLTransactionToastDetailsBodyElement;
        new (): HTMLTransactionToastDetailsBodyElement;
    };
    interface HTMLTransactionToastListElement extends Components.TransactionToastList, HTMLStencilElement {
    }
    var HTMLTransactionToastListElement: {
        prototype: HTMLTransactionToastListElement;
        new (): HTMLTransactionToastListElement;
    };
    interface HTMLTransactionToastProgressElement extends Components.TransactionToastProgress, HTMLStencilElement {
    }
    var HTMLTransactionToastProgressElement: {
        prototype: HTMLTransactionToastProgressElement;
        new (): HTMLTransactionToastProgressElement;
    };
    interface HTMLTransactionToastWrapperElement extends Components.TransactionToastWrapper, HTMLStencilElement {
    }
    var HTMLTransactionToastWrapperElement: {
        prototype: HTMLTransactionToastWrapperElement;
        new (): HTMLTransactionToastWrapperElement;
    };
    interface HTMLWalletConnectModalElement extends Components.WalletConnectModal, HTMLStencilElement {
    }
    var HTMLWalletConnectModalElement: {
        prototype: HTMLWalletConnectModalElement;
        new (): HTMLWalletConnectModalElement;
    };
    interface HTMLElementTagNameMap {
        "format-amount": HTMLFormatAmountElement;
        "generic-modal": HTMLGenericModalElement;
        "generic-spinner": HTMLGenericSpinnerElement;
        "ledger-connect-modal": HTMLLedgerConnectModalElement;
        "my-component": HTMLMyComponentElement;
        "pending-transactions-modal": HTMLPendingTransactionsModalElement;
        "sign-transactions-modal": HTMLSignTransactionsModalElement;
        "transaction-toast": HTMLTransactionToastElement;
        "transaction-toast-content": HTMLTransactionToastContentElement;
        "transaction-toast-details": HTMLTransactionToastDetailsElement;
        "transaction-toast-details-body": HTMLTransactionToastDetailsBodyElement;
        "transaction-toast-list": HTMLTransactionToastListElement;
        "transaction-toast-progress": HTMLTransactionToastProgressElement;
        "transaction-toast-wrapper": HTMLTransactionToastWrapperElement;
        "wallet-connect-modal": HTMLWalletConnectModalElement;
    }
}
declare namespace LocalJSX {
    interface FormatAmount {
        "class"?: string;
        "decimals"?: number;
        "digits"?: number;
        "egldLabel"?: string;
        "showLabel"?: boolean;
        "showLastNonZeroDecimal"?: boolean;
        "token"?: string;
        "value"?: string;
    }
    interface GenericModal {
        "body"?: VNode;
        "modalSubtitle"?: string | VNode;
        "modalTitle"?: string | VNode;
        "onClose"?: () => void;
    }
    interface GenericSpinner {
    }
    interface LedgerConnectModal {
        "data"?: ILedgerConnectModalData;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PendingTransactionsModal {
        "data"?: IPendingTransactionsModalData;
    }
    interface SignTransactionsModal {
        "data"?: ISignTransactionsModalData;
    }
    interface TransactionToast {
        "onHandleDeleteToast"?: (event: TransactionToastCustomEvent<string>) => void;
        "processedTransactionsStatus"?: string | JSX.Element;
        "toastDataState"?: IToastDataState;
        "toastId"?: string;
        "transactionProgressState"?: ITransactionProgressState;
        "transactions"?: ITransaction[];
        "wrapperClass"?: string;
    }
    interface TransactionToastContent {
        "onDeleteToast"?: (event: TransactionToastContentCustomEvent<void>) => void;
        "processedTransactionsStatus"?: string | JSX.Element;
        "toastDataState"?: IToastDataState;
        "transactions"?: ITransaction[];
    }
    interface TransactionToastDetails {
        "processedTransactionsStatus"?: JSX.Element | string;
        "transactionClass"?: string;
        "transactions"?: ITransaction[];
    }
    interface TransactionToastDetailsBody {
        "hash"?: string;
        "status"?: string;
        "transactionClass"?: string;
    }
    interface TransactionToastList {
    }
    interface TransactionToastProgress {
        "currentRemaining"?: number;
        "progressClass"?: string;
    }
    interface TransactionToastWrapper {
        "wrapperClass"?: string;
        "wrapperId"?: string;
    }
    interface WalletConnectModal {
        "data"?: IWalletConnectModalData;
    }
    interface IntrinsicElements {
        "format-amount": FormatAmount;
        "generic-modal": GenericModal;
        "generic-spinner": GenericSpinner;
        "ledger-connect-modal": LedgerConnectModal;
        "my-component": MyComponent;
        "pending-transactions-modal": PendingTransactionsModal;
        "sign-transactions-modal": SignTransactionsModal;
        "transaction-toast": TransactionToast;
        "transaction-toast-content": TransactionToastContent;
        "transaction-toast-details": TransactionToastDetails;
        "transaction-toast-details-body": TransactionToastDetailsBody;
        "transaction-toast-list": TransactionToastList;
        "transaction-toast-progress": TransactionToastProgress;
        "transaction-toast-wrapper": TransactionToastWrapper;
        "wallet-connect-modal": WalletConnectModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "format-amount": LocalJSX.FormatAmount & JSXBase.HTMLAttributes<HTMLFormatAmountElement>;
            "generic-modal": LocalJSX.GenericModal & JSXBase.HTMLAttributes<HTMLGenericModalElement>;
            "generic-spinner": LocalJSX.GenericSpinner & JSXBase.HTMLAttributes<HTMLGenericSpinnerElement>;
            "ledger-connect-modal": LocalJSX.LedgerConnectModal & JSXBase.HTMLAttributes<HTMLLedgerConnectModalElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pending-transactions-modal": LocalJSX.PendingTransactionsModal & JSXBase.HTMLAttributes<HTMLPendingTransactionsModalElement>;
            "sign-transactions-modal": LocalJSX.SignTransactionsModal & JSXBase.HTMLAttributes<HTMLSignTransactionsModalElement>;
            "transaction-toast": LocalJSX.TransactionToast & JSXBase.HTMLAttributes<HTMLTransactionToastElement>;
            "transaction-toast-content": LocalJSX.TransactionToastContent & JSXBase.HTMLAttributes<HTMLTransactionToastContentElement>;
            "transaction-toast-details": LocalJSX.TransactionToastDetails & JSXBase.HTMLAttributes<HTMLTransactionToastDetailsElement>;
            "transaction-toast-details-body": LocalJSX.TransactionToastDetailsBody & JSXBase.HTMLAttributes<HTMLTransactionToastDetailsBodyElement>;
            "transaction-toast-list": LocalJSX.TransactionToastList & JSXBase.HTMLAttributes<HTMLTransactionToastListElement>;
            "transaction-toast-progress": LocalJSX.TransactionToastProgress & JSXBase.HTMLAttributes<HTMLTransactionToastProgressElement>;
            "transaction-toast-wrapper": LocalJSX.TransactionToastWrapper & JSXBase.HTMLAttributes<HTMLTransactionToastWrapperElement>;
            "wallet-connect-modal": LocalJSX.WalletConnectModal & JSXBase.HTMLAttributes<HTMLWalletConnectModalElement>;
        }
    }
}

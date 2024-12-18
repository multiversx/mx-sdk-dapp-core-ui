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
import { IWalletConnectModalData } from "./components/wallet-connect-modal/wallet-connect-modal.types";
export { VNode } from "@stencil/core";
export { ILedgerConnectModalData } from "./components/ledger-connect-modal/ledger-connect-modal.types";
export { IEventBus } from "./utils/EventBus";
export { IPendingTransactionsModalData } from "./components/pending-transactions-modal/pending-transactions-modal.types";
export { ISignTransactionsModalData } from "./components/sign-transactions-modal/sign-transactions-modal.types";
export { IWalletConnectModalData } from "./components/wallet-connect-modal/wallet-connect-modal.types";
export namespace Components {
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
    interface WalletConnectModal {
        "data": IWalletConnectModalData;
        "getEventBus": () => Promise<IEventBus>;
    }
}
declare global {
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
    interface HTMLWalletConnectModalElement extends Components.WalletConnectModal, HTMLStencilElement {
    }
    var HTMLWalletConnectModalElement: {
        prototype: HTMLWalletConnectModalElement;
        new (): HTMLWalletConnectModalElement;
    };
    interface HTMLElementTagNameMap {
        "generic-modal": HTMLGenericModalElement;
        "generic-spinner": HTMLGenericSpinnerElement;
        "ledger-connect-modal": HTMLLedgerConnectModalElement;
        "my-component": HTMLMyComponentElement;
        "pending-transactions-modal": HTMLPendingTransactionsModalElement;
        "sign-transactions-modal": HTMLSignTransactionsModalElement;
        "wallet-connect-modal": HTMLWalletConnectModalElement;
    }
}
declare namespace LocalJSX {
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
    interface WalletConnectModal {
        "data"?: IWalletConnectModalData;
    }
    interface IntrinsicElements {
        "generic-modal": GenericModal;
        "generic-spinner": GenericSpinner;
        "ledger-connect-modal": LedgerConnectModal;
        "my-component": MyComponent;
        "pending-transactions-modal": PendingTransactionsModal;
        "sign-transactions-modal": SignTransactionsModal;
        "wallet-connect-modal": WalletConnectModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "generic-modal": LocalJSX.GenericModal & JSXBase.HTMLAttributes<HTMLGenericModalElement>;
            "generic-spinner": LocalJSX.GenericSpinner & JSXBase.HTMLAttributes<HTMLGenericSpinnerElement>;
            "ledger-connect-modal": LocalJSX.LedgerConnectModal & JSXBase.HTMLAttributes<HTMLLedgerConnectModalElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pending-transactions-modal": LocalJSX.PendingTransactionsModal & JSXBase.HTMLAttributes<HTMLPendingTransactionsModalElement>;
            "sign-transactions-modal": LocalJSX.SignTransactionsModal & JSXBase.HTMLAttributes<HTMLSignTransactionsModalElement>;
            "wallet-connect-modal": LocalJSX.WalletConnectModal & JSXBase.HTMLAttributes<HTMLWalletConnectModalElement>;
        }
    }
}

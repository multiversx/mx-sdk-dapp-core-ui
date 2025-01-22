import { IconName } from '@fortawesome/free-solid-svg-icons';
import { JSX } from '@stencil/core';

export interface IToastDataState {
  id: string;
  icon: IconName | string | JSX.Element;
  hasCloseButton: boolean;
  title: string;
  iconClassName: string;
}

export interface ITransactionProgressState {
  progressClass?: string;
  currentRemaining: number;
}

export interface ITransaction {
  hash: string;
  status: string;
}

export interface ITransactionToast {
  toastId: string;
  wrapperClass: string;
  processedTransactionsStatus: string | JSX.Element;
  transactions: ITransaction[];
  toastDataState: IToastDataState;
  transactionProgressState?: ITransactionProgressState;
}

interface ISharedCustomToast {
  toastId: string;
  type?: string;
  onClose?: () => void;
}

export interface ISimpleToastType extends ISharedCustomToast {
  icon: IconName | string | JSX.Element;
  iconClassName?: string;
  title?: string;
  message?: string;
  /**
   * Use `subtitle` to display a row of information between `title` and `message`
   */
  subtitle?: string;
  instantiateToastElement?: never;
}

export interface IComponentToastType extends ISharedCustomToast {
  /**
   * A function that creates a custom toast component.
   *
   * Use `componentCreate` to display a custom agnostic component.
   *
   * @returns {HTMLElement | null} The custom toast component to be displayed, or `null` if no component is created.
   *
   * **⚠️ Warning**: Toasts with components will not be persisted on page reload because agnostic components are not serializable.
   */
  instantiateToastElement: (() => HTMLElement) | null;
  icon?: never;
  iconClassName?: never;
  title?: never;
  message?: never;
  subtitle?: never;
}
export type ICustomToastType = ISimpleToastType | IComponentToastType;

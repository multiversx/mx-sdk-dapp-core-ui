import type { IEventBus } from 'utils/EventBus';
import { EventBus } from 'utils/EventBus';

import type { ILedgerAccount, ILedgerConnectPanelData } from './ledger.types';
import { LedgerConnectEventsEnum } from './ledger.types';

interface ILedgerConnectEventBusProps {
  forceUpdateFn: () => void;
  closeFn: () => void;
}

interface ILedgerConnectDataUpdateProps extends ILedgerConnectEventBusProps {
  payload: ILedgerConnectPanelData;
}

interface GetLedgerAddressByIndexType {
  accounts?: ILedgerAccount[];
  selectedIndex: number;
}

const getLedgerAddressByIndex = ({ accounts, selectedIndex }: GetLedgerAddressByIndexType) => accounts?.find(({ index }) => index === selectedIndex)?.address || '';

export class LedgerConnectBase {
  eventBus: IEventBus = new EventBus();
  selectedIndex = 0;
  selectedAddress = '';

  constructor(public data: ILedgerConnectPanelData) {}

  getEventBus() {
    return this.eventBus;
  }

  accessWallet() {
    this.eventBus.publish(LedgerConnectEventsEnum.ACCESS_WALLET, {
      addressIndex: this.selectedIndex,
      selectedAddress: this.selectedAddress || getLedgerAddressByIndex({ accounts: this.data.accountScreenData?.accounts, selectedIndex: this.selectedIndex }),
    });
  }

  selectAccount(index: number) {
    this.selectedIndex = index;
    this.selectedAddress = getLedgerAddressByIndex({ accounts: this.data.accountScreenData?.accounts, selectedIndex: this.selectedIndex });
  }

  goToPage(page: number) {
    this.eventBus.publish(LedgerConnectEventsEnum.GO_TO_PAGE, page);
  }

  subscribeEventBus({ closeFn, forceUpdateFn }: ILedgerConnectEventBusProps) {
    this.eventBus.subscribe(LedgerConnectEventsEnum.DATA_UPDATE, (payload: ILedgerConnectPanelData) => this.dataUpdate({ payload, closeFn, forceUpdateFn }));
  }

  unsubscribeEventBus({ closeFn, forceUpdateFn }: ILedgerConnectEventBusProps) {
    this.eventBus.unsubscribe(LedgerConnectEventsEnum.DATA_UPDATE, (payload: ILedgerConnectPanelData) => this.dataUpdate({ payload, closeFn, forceUpdateFn }));
  }

  private dataUpdate({ payload, closeFn, forceUpdateFn }: ILedgerConnectDataUpdateProps) {
    if (payload.shouldClose) {
      return closeFn();
    }
    this.data = { ...payload };
    forceUpdateFn();
  }
}

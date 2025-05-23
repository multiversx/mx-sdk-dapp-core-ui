import { Component, Element, forceUpdate, h, Method, Prop, State, Watch } from '@stencil/core';
import type { IEventBus } from 'utils/EventBus';

import { type IWalletConnectPanelData, WalletConnectEventsEnum } from '../wallet-connect.types';
import { WalletConnectBase } from '../WalletConnectBase';

@Component({
  tag: 'mvx-wallet-connect-provider',
  styleUrl: 'wallet-connect-provider.scss',
  shadow: true,
})
export class WalletConnectProvider {
  @Element() hostElement: HTMLElement;
  @Prop() data: IWalletConnectPanelData = { wcURI: '' };
  @State() qrCodeSvg: string = '';

  private walletConnectBase: WalletConnectBase;

  componentWillLoad() {
    this.walletConnectBase = new WalletConnectBase(this.data);
  }

  @Method() async getEventBus(): Promise<IEventBus> {
    return this.walletConnectBase.getEventBus();
  }

  @Watch('data')
  async onDataChange(data: IWalletConnectPanelData) {
    if (data.wcURI) {
      this.qrCodeSvg = await this.walletConnectBase.generateSVG(data.wcURI);
    }
  }

  render() {
    return <mvx-wallet-connect-flow qrCodeSvg={this.qrCodeSvg} />;
  }

  private removeComponent() {
    if (this.hostElement?.parentNode) {
      this.hostElement.parentNode.removeChild(this.hostElement);
    }
  }

  private getEventSubscription() {
    return {
      closeFn: () => this.removeComponent(),
      forceUpdateFn: () => {
        this.data = this.walletConnectBase.data;
        forceUpdate(this);
      },
    };
  }
  componentDidLoad() {
    this.walletConnectBase.subscribeEventBus(this.getEventSubscription());
  }

  disconnectedCallback() {
    this.walletConnectBase.eventBus.publish(WalletConnectEventsEnum.UI_DISCONNECTED);
    this.walletConnectBase.unsubscribeEventBus(this.getEventSubscription());
  }
}

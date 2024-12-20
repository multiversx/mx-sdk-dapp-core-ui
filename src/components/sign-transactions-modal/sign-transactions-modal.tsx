import { Component, Prop, h, Element, Method, forceUpdate, Watch } from '@stencil/core';
import { EventBus, IEventBus } from 'utils/EventBus';
import { ISignTransactionsModalData, SignEventsEnum } from './sign-transactions-modal.types';
import state, { resetState } from './sign-transactions-modal-store';

const HEADERS = {
  FungibleESDT: 'token-component',
  SemiFungibleESDT: 'fungible-component',
  NonFungibleESDT: 'fungible-component',
};

@Component({
  tag: 'sign-transactions-modal',
  styleUrl: 'sign-transactions-modal.css',
  shadow: true,
})
export class SignTransactionsModal {
  @Element() hostElement: HTMLElement;
  private eventBus: IEventBus = EventBus.getInstance();

  @Prop() data: ISignTransactionsModalData = {
    egldLabel: '',
    feeLimit: '',
    feeInFiatLimit: '',
    total: 0,
    currentIndex: 0,
  };

  @Method() async getEventBus() {
    return this.eventBus;
  }

  @Watch('data')
  onDataChange(data: ISignTransactionsModalData) {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(state, key)) {
        state[key] = data[key];
      }
    }
  }

  componentWillLoad() {
    state.onSign = () => {
      this.eventBus.publish(SignEventsEnum.SIGN_TRANSACTION);
    };
  }

  render() {
    const { receiver, tokenType } = state;
    const HeaderComponent = HEADERS[tokenType];

    return (
      <generic-modal
        onClose={() => this.close()}
        modalTitle="Sign transaction"
        modalSubtitle={`Transaction ${state.currentIndex + 1} of ${state.total}`}
        body={
          receiver ? (
            <HeaderComponent></HeaderComponent>
          ) : (
            <div class="loading-spinner">
              <generic-spinner></generic-spinner>
            </div>
          )
        }
      />
    );
  }

  async nextPage() {
    this.eventBus.publish(SignEventsEnum.NEXT_PAGE);
  }

  async prevPage() {
    this.eventBus.publish(SignEventsEnum.PREV_PAGE);
  }

  close(props = { isUserClick: true }) {
    resetState();

    if (props.isUserClick) {
      this.eventBus.publish(SignEventsEnum.CLOSE);
    }

    if (this.hostElement && this.hostElement.parentNode) {
      this.hostElement.parentNode.removeChild(this.hostElement);
    }
  }

  private dataUpdate(payload: ISignTransactionsModalData) {
    this.data = { ...payload };
    forceUpdate(this);
  }

  componentDidLoad() {
    this.eventBus.subscribe(SignEventsEnum.DATA_UPDATE, this.dataUpdate.bind(this));
  }

  disconnectedCallback() {
    this.eventBus.unsubscribe(SignEventsEnum.DATA_UPDATE, this.dataUpdate.bind(this));
  }
}

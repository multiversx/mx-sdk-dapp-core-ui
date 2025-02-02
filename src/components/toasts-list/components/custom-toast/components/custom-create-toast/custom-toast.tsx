import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, Prop, Event, h, EventEmitter } from '@stencil/core';
import { IComponentToast } from 'components/toasts-list/components/transaction-toast/transaction-toast.type';
import { getIconHtmlFromIconDefinition } from 'utils/icons/getIconHtmlFromIconDefinition';

@Component({
  tag: 'custom-toast',
  styleUrl: 'custom-toast.css',
  shadow: true,
})
export class CustomToast {
  @Prop() toast: IComponentToast;
  @Event() handleDeleteToast: EventEmitter<string>;

  render() {
    const customToast = (
      <div class="toast-wrapper">
        <button onClick={() => this.handleDeleteToast.emit()} type="button" class="icon-close" innerHTML={getIconHtmlFromIconDefinition(faTimes)}></button>
        <div class="toast-body" ref={container => this.initializeToast(container)}></div>
      </div>
    );
    return customToast;
  }

  private initializeToast(container: HTMLElement) {
    if (!container || container.hasChildNodes()) {
      return;
    }
    const customElement = this.toast.instantiateToastElement();
    if (!customElement) {
      return;
    }
    container.appendChild(customElement);
  }
}

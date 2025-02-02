import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
import { faCheck, faCircleNotch, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { getIconHtmlFromIconDefinition } from 'utils/icons/getIconHtmlFromIconDefinition';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';

const iconData: Record<string, IconDefinition> = {
  pending: faCircleNotch,
  success: faCheck,
  fail: faTimes,
  invalid: faTimes,
};

@Component({
  tag: 'transaction-toast-details-body',
  styleUrl: 'transaction-toast-details-body.css',
  shadow: true,
})
export class TransactionDetailsBody {
  @Prop() transactionClass?: string = 'transaction-container';
  @Prop() status?: string;
  @Prop() hash: string;

  render() {
    const statusIcon = this.status ? iconData[this.status] : null;
    const iconHtml = statusIcon ? getIconHtmlFromIconDefinition(statusIcon) : null;

    return (
      <div class={this.transactionClass} key={this.hash} data-testid={DataTestIdsEnum.transactionDetailsToastBody}>
        {iconHtml && (
          <div
            innerHTML={iconHtml}
            class={classNames('icon', {
              'fa-spin': this.status === 'pending',
            })}
          ></div>
        )}

      <span>{this.hash.length > 12 ? `${this.hash.slice(0, 6)}...${this.hash.slice(-6)}` : this.hash}</span>
      </div>
    );
  }
}

import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Component, h, Prop } from '@stencil/core';
import classNames from 'classnames';
import type { ITransactionValue } from 'components/controlled/transactions-table/transactions-table.type';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';

@Component({
  tag: 'transaction-value',
  styleUrl: 'transaction-value.css',
  shadow: true,
})
export class TransactionValue {
  @Prop() class?: string;
  @Prop() value: ITransactionValue;

  render() {
    return (
      <div class={classNames(this.class, 'transaction-value')}>
        {this.value.badge && (
          <div data-testid={DataTestIdsEnum.transactionNftBadge} class="badge badge-secondary badge-pill font-weight-light transaction-value-badge">
            {this.value.badge}
          </div>
        )}

        {this.value.showFormattedAmount && (
          <format-amount
            class={classNames('mr-1', {
              'text-truncate': this.value.svgUrl,
            })}
            dataTestId={DataTestIdsEnum.transactionActionFormattedAmount}
            isValid={true}
            label={this.value.egldLabel}
            valueDecimal={this.value.valueDecimal}
            valueInteger={this.value.valueInteger}
          />
        )}

        {this.value.link && (
          <explorer-link
            link={this.value.link}
            class={classNames('transaction-value-link', {
              'side-link d-flex': this.value.svgUrl,
              'text-truncate': !this.value.svgUrl,
            })}
          >
            <div class="transaction-value-content" slot="content">
              {this.value.svgUrl && <img src={this.value.svgUrl} alt={this.value.name ?? ''} class="transaction-value-img" />}
              {this.value.linkText && (
                <span
                  class={classNames('transaction-value-link-text', {
                    truncate: this.value.ticker === this.value.collection && this.value.ticker != null,
                  })}
                >
                  {this.value.linkText}
                </span>
              )}
            </div>
          </explorer-link>
        )}
        {this.value.titleText && <fa-icon icon={faLayerGroup} class="transaction-value-icon" title={this.value.titleText} />}
      </div>
    );
  }
}

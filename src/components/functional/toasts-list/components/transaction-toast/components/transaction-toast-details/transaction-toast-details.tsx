import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import type { JSX } from '@stencil/core';
import { Component, Fragment, h, Prop, State } from '@stencil/core';

import type { ITransaction } from '../../transaction-toast.type';

@Component({
  tag: 'transaction-toast-details',
  styleUrl: 'transaction-toast-details.css',
  shadow: true,
})
export class TransactionDetails {
  @Prop() processedTransactionsStatus?: JSX.Element | string;
  @Prop() transactions?: ITransaction[];
  @Prop() transactionClass: string;
  @Prop() maxShownTransactions: number = 5;
  @State() isExpanded: boolean = false;
  @State() showAllTransactions: boolean = false;

  private toggleExpand() {
    this.isExpanded = !this.isExpanded;
    // Reset showAllTransactions when collapsing
    if (!this.isExpanded) {
      this.showAllTransactions = false;
    }
  }

  private showMoreTransactions() {
    this.showAllTransactions = true;
  }

  render() {
    if (this.transactions == null) {
      return null;
    }

    const hasMoreTransactionsToShow = this.transactions.length > this.maxShownTransactions;
    const hiddenTransactionsCount = this.transactions.length - this.maxShownTransactions;
    const visibleTransactions = this.showAllTransactions ? this.transactions : this.transactions.slice(0, this.maxShownTransactions);

    return (
      <Fragment>
        <div class="status-title" onClick={this.toggleExpand.bind(this)}>
          <fa-icon icon={this.isExpanded ? faChevronUp : faChevronDown} class="toggle-icon"></fa-icon>
          {this.processedTransactionsStatus}
        </div>

        {this.isExpanded && (
          <div class="transaction-details-list">
            {visibleTransactions.map(({ hash, status, link }) => (
              <transaction-toast-details-body transactionClass={this.transactionClass} hash={hash} status={status} link={link} key={hash} />
            ))}

            {hasMoreTransactionsToShow && !this.showAllTransactions && (
              <div class="view-all-container">
                <button type="button" class="show-more-button" onClick={this.showMoreTransactions.bind(this)}>
                  Show {hiddenTransactionsCount} more
                </button>
              </div>
            )}
          </div>
        )}
      </Fragment>
    );
  }
}

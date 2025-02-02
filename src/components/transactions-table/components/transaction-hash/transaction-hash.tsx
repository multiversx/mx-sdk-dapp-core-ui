import { Component, h, Prop } from '@stencil/core';
import { ITransactionsTableRow } from '../../transactions-table.type';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';

@Component({
  tag: 'transaction-hash',
  styleUrl: 'transaction-hash.css',
  shadow: true,
})
export class TransactionHash {
  @Prop() transaction: ITransactionsTableRow;

  render() {
    return (
      <div class="transactions-table-body-cell">
        <transaction-icon icon-info={this.transaction.iconInfo}></transaction-icon>
        <explorer-link dataTestId={DataTestIdsEnum.transactionLink} link={this.transaction.link} text={this.transaction.txHash}></explorer-link>
      </div>
    );
  }
}

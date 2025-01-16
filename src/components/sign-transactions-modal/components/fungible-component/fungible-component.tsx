import { Component, h } from '@stencil/core';
import state from '../../signTransactionsModalStore';

const LABELS = {
  SemiFungibleESDT: 'SFT',
  NonFungibleESDT: 'NFT'
};

@Component({
  tag: 'fungible-component',
  styleUrl: 'fungible-component.css',
  shadow: false
})
export class FungibleComponent {
  render() {
    const { sftTransaction, nftTransaction, commonData } = state;
    const { tokenType } = commonData;

    const data =
      tokenType === 'SemiFungibleESDT' ? sftTransaction : nftTransaction;
    const { amount = '', identifier = '', imageURL = '' } = data || {};

    const label = LABELS[tokenType];
    return (
      <sign-transaction-component
        header={
          <div class="fungible-container">
            <span>{`You are sending ${amount} ${label}`}</span>
            <div class="fungible-inner-container">
              <div class="fungible-img-container">
                <img src={imageURL} alt={identifier} class="fungible-img" />
                <div>
                  <span>{identifier}</span>
                </div>
              </div>

              <span class="fungible-sft">{label}</span>
            </div>
          </div>
        }
      ></sign-transaction-component>
    );
  }
}

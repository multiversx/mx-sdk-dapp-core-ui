import { Component, Prop } from '@stencil/core';

import type { ProviderTypeEnum } from '../../types/provider.types';
import { renderUnlockButton } from './renderUnlockButton';

@Component({
  tag: 'unlock-button',
  styleUrl: 'unlock-button.scss',
  shadow: true,
})
export class UnlockButton {
  @Prop() buttonLabel: string;
  @Prop() buttonIcon: HTMLElement;
  @Prop() buttonType?: ProviderTypeEnum;
  @Prop() class?: string;

  render() {
    return renderUnlockButton(this);
  }
}

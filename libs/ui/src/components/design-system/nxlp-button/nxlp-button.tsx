import { Component, h, Listen, Prop } from '@stencil/core';

enum BtnType {
  Primary = 'primary',
  Secondary = 'secondary',
  Danger = 'danger',
}

@Component({
  tag: 'nxlp-button',
  styleUrl: 'nxlp-button.scss',
})
export class NxlpButton {
  @Prop() type?: BtnType = BtnType.Primary;
  @Prop() icon?: string;
  @Prop() text: string;

  @Listen('click')
  onClick() {}

  render() {
    return (
      <button class={`${this.type} ${this.icon && 'has-icon'}`}>
        {this.icon && <tdn-ui-icon name={this.icon} size="m" />}
        <p class="text-s">
          <slot />
        </p>
      </button>
    );
  }
}

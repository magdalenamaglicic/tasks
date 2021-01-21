import { Component, h, Listen, Prop, Element, Host } from '@stencil/core';

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

  @Element() el!: HTMLElement;

  @Listen('click')
  onClick() {}

  render() {
    let classes = this.type.toString();
    classes += this.icon ? ' has-icon' : '';

    return (
      <Host>
        <button class={classes}>
          {this.icon && <tdn-ui-icon name={this.icon} size="m" />}
          <p class="text-s">
            <slot />
          </p>
        </button>
      </Host>
    );
  }
}

import { Component, h, Prop, Element, Host } from '@stencil/core';

@Component({
  tag: 'nxlp-text-input',
  styleUrl: 'nxlp-text-input.scss',
})
export class NxlpTextInput {
  @Prop({ mutable: true }) value = '';
  @Prop() required?: boolean;
  @Prop() error? = '';
  @Prop() inputTitle? = '';

  @Element() el!: HTMLElement;

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    const hasError = this.error !== '';
    const classes = hasError ? 'error' : '';

    return (
      <Host class={classes}>
        <div class="text-xs title">
          <span>{this.inputTitle}</span>
          {this.required && <span>*</span>}
        </div>
        <input
          onInput={(e) => this.handleChange(e)}
          type="text"
          value={this.value}
          class="text-m"
        ></input>
        {hasError && <span class="error text-m">{this.error}</span>}
      </Host>
    );
  }
}

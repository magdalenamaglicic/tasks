import { Component, h, Prop, Host } from '@stencil/core';

const dateLocale = 'en-US';

@Component({
  tag: 'nxlp-date',
  styleUrl: 'nxlp-date.scss',
})
export class NxlpDate {
  @Prop() date?: string;

  render() {
    const dateObject = this.date ? new Date(this.date) : new Date();

    return (
      <Host>
        <div>
          <tdn-ui-icon name="calendar" color="color-neutral-25" size="m" />
          <p class="text-m">{dateObject.toLocaleDateString(dateLocale)}</p>
        </div>
      </Host>
    );
  }
}

import { newSpecPage } from '@stencil/core/testing';
import { NxlpDate } from './nxlp-date';

describe('nxlp-date', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [NxlpDate],
      html: '<nxlp-date date="12-01-2021"></nxlp-date>',
    });
    expect(root).toEqualHtml(`
      <nxlp-date date="12-01-2021">
        <div>
          <tdn-ui-icon color="color-neutral-25" name="calendar" size="m"></tdn-ui-icon>
          <p class="text-m">
           12/1/2021
          </p>
        </div>
      </nxlp-date>
    `);
  });
});

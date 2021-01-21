import { newSpecPage } from '@stencil/core/testing';
import { NxlpTextInput } from './nxlp-text-input';

describe('nxlp-text-input', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [NxlpTextInput],
      html: '<nxlp-text-input></nxlp-text-input>',
    });
    expect(root).toEqualHtml(`
      <nxlp-text-input>
        <span class="text-xs title">
          <span></span>
        </span>
        <input class="text-m" type="text" value="">
      </nxlp-text-input>
    `);
  });
});

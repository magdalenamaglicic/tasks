import { newSpecPage } from '@stencil/core/testing';
import { NxlpButton } from './nxlp-button';

describe('nxlp-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [NxlpButton],
      html: '<nxlp-button></nxlp-button>',
    });
    expect(root).toEqualHtml(`
      <nxlp-button>
        <button class="primary">
          <p class="text-s"></p>
        </button>
      </nxlp-button>
    `);
  });
});

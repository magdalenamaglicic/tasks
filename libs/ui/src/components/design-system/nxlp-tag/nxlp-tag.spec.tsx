import { newSpecPage } from '@stencil/core/testing';
import { NxlpTag } from './nxlp-tag';

describe('nxlp-tag', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [NxlpTag],
      html: '<nxlp-tag category="family"></nxlp-tag>',
    });
    expect(root).toEqualHtml(`
      <nxlp-tag category="family">
        <span class="family tag">
          <span class="text-xs">
            FAMILY
          </span>
        </span>
      </nxlp-tag>
    `);
  });
});

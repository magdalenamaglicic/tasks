import { newSpecPage } from '@stencil/core/testing';
import { NxlpTag } from './nxlp-tag';

describe('nxlp-tag', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [NxlpTag],
      html: '<nxlp-tag></nxlp-tag>',
    });
    expect(root).toEqualHtml(`
      <nxlp-tag>
        <div>
          Hello, World! I'm
        </div>
      </nxlp-tag>
    `);
  });
});

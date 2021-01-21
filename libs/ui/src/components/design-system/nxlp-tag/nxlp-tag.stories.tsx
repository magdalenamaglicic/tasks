import { storiesOf } from '@storybook/html';

storiesOf('Design System/Tags', module)
  .addParameters({ layout: 'centered' })
  .add(
    'Default',
    () => `
        <story>
          <nxlp-tag category="work"></nxlp-tag>
          <nxlp-tag category="family"></nxlp-tag>
          <nxlp-tag category="personal"></nxlp-tag>
          <nxlp-tag category="important"></nxlp-tag>
        </story>
    `
  )
  .add(
    'Edit',
    () => `
        <story>
          <nxlp-tag category="family" edit="true"></nxlp-tag>
        </story>
    `
  );

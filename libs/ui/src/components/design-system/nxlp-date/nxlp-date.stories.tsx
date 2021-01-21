import { storiesOf } from '@storybook/html';

storiesOf('Design System/UI', module)
  .addParameters({ layout: 'centered' })
  .add(
    'Date',
    () => `
        <story>
          <nxlp-date date="03-08-2021"></nxlp-date>
        </story>
    `
  );

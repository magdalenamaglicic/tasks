import { storiesOf } from '@storybook/html';

storiesOf('Design System/Buttons', module)
  .addParameters({ layout: 'padded' })
  .add(
    'Primary',
    () => `
        <story>
          <nxlp-button type="primary">Primary</nxlp-button>
          <nxlp-button type="primary" icon="Upload">Primary with icon</nxlp-button>
        </story>
    `
  )
  .add(
    'Secondary',
    () => `
        <story>
          <nxlp-button type="secondary">Secondary</nxlp-button>
        </story>
    `
  )
  .add(
    'Danger',
    () => `
        <story>
          <nxlp-button type="danger">Danger</nxlp-button>
        </story>
    `
  );

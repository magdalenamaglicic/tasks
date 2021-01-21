import { storiesOf } from '@storybook/html';

storiesOf('Design System/Inputs', module)
  .addParameters({ layout: 'centered' })
  .add(
    'Text',
    () => `
        <story style="align-items: flex-start">
          <nxlp-text-input value=""></nxlp-text-input>
          <nxlp-text-input value="My value" inputTitle="Task name" required={true}></nxlp-text-input>
          <nxlp-text-input value="My Value" inputTitle="Task name" required={true} error="Error message"></nxlp-text-input>
        </story>
    `
  );

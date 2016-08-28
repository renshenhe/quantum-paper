import React, { PureComponent } from 'react';
import { withMeasurements } from '../../../Measure/Measure';
import Chip from '../Chip';
import DefaultChipMeasurements from './DefaultChipMeasurements';

class DeletableChip extends PureComponent {
  render() {
    return (
      <Chip
        label='Example Chip'
        deletable={true}
      />
    );
  }
};
class NormalChip extends PureComponent {
  render() {
    return (
      <Chip
        label='Example Chip'
      />
    );
  }
};
class DeletableChipIcon extends PureComponent {
  render() {
    return (
      <Chip
        label='Example Chip'
        deletable={true}
        icon={<TestIcon />}
      />
    );
  }
};

const TestIcon = () => <div style={{ height: '48px', width: '48px', backgroundColor: '#009587'}} />;
const DeletableMeasuredChip = withMeasurements(DeletableChip)(DefaultChipMeasurements,
  'Deletable chip',
  [
    'Height: 32px',
    'Label left padding: 12px',
    ' ',
    'Remove Icon',
    ' ',
    'Size: 24dp x 24dp',
    'Color & opacity: 54% black',
    'Margin: 4dp',
    ' ',
    'On desktop, the “Remove” icon is persistent.'
  ],
  {
    deletable: true
  }
)
const DeletableMeasuredChipIcon = withMeasurements(DeletableChipIcon)(DefaultChipMeasurements,
  'Chips with text and an icon',
  null,
  {
    deletable: true,
    icon: true,
  }
)
const NormalChipMeasured = withMeasurements(NormalChip)(DefaultChipMeasurements,
  'Chips with text',
  [
    '13sp Roboto Regular',
    '87% black'
  ]
)

export default class DefaultChip extends PureComponent {
  render() {
    return (
      <div>
        <DeletableMeasuredChip />
        <DeletableMeasuredChipIcon />
        <NormalChipMeasured />
      </div>
    );
  }
};